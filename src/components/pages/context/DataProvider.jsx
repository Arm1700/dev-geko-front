import React, {createContext, useEffect, useReducer} from "react";
import {useTranslation} from 'react-i18next';

// Создаем контекст для данных
export const DataContext = createContext();

// Определяем начальное состояние
const initialState = {
    courses: [],
    events: [],
    categories: [],
    reviews: [],
    lessonInfo: [],
    teams: [],
    loading: true,
    error: null,
};

// Редуктор для обновления состояния
const dataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {...state, categories: action.payload};
        case 'SET_COURSES':
            return {...state, courses: action.payload};
        case 'SET_EVENTS':
            return {...state, events: action.payload};
        case 'SET_REVIEWS':
            return {...state, reviews: action.payload};
        case 'SET_LESSON_INFO':
            return {...state, lessonInfo: action.payload};
        case 'SET_TEAMS':
            return {...state, teams: action.payload};
        case 'SET_LOADING':
            return {...state, loading: action.payload};
        case 'SET_ERROR':
            return {...state, error: action.payload};
        default:
            return state;
    }
};

export const DataProvider = ({children}) => {
    const {i18n} = useTranslation();
    const language = i18n.language;

    // Используем useReducer вместо useState
    const [state, dispatch] = useReducer(dataReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'SET_LOADING', payload: true});
            try {
                const [
                    categoriesResponse,
                    coursesResponse,
                    eventsResponse,
                    reviewsResponse,
                    lessonInfoResponse,
                    teamsResponse,
                ] = await Promise.all([
                    fetch(`https://dev.gekoeducation.com/api/categories/?language=${language}`),
                    fetch(`https://dev.gekoeducation.com/api/popular_courses/?language=${language}`),
                    fetch(`https://dev.gekoeducation.com/api/events/?language=${language}`),
                    fetch(`https://dev.gekoeducation.com/api/reviews/?language=${language}`),
                    fetch(`https://dev.gekoeducation.com/api/lesson_info/?language=${language}`),
                    fetch(`https://dev.gekoeducation.com/api/team/?language=${language}`)
                ]);

                if (!categoriesResponse.ok) throw new Error(`Error fetching categories: ${categoriesResponse.statusText}`);
                if (!coursesResponse.ok) throw new Error(`Error fetching courses: ${coursesResponse.statusText}`);
                if (!eventsResponse.ok) throw new Error(`Error fetching events: ${eventsResponse.statusText}`);
                if (!reviewsResponse.ok) throw new Error(`Error fetching reviews: ${reviewsResponse.statusText}`);
                if (!lessonInfoResponse.ok) throw new Error(`Error fetching lesson info: ${lessonInfoResponse.statusText}`);
                if (!teamsResponse.ok) throw new Error(`Error fetching teams: ${teamsResponse.statusText}`);

                const categoriesData = await categoriesResponse.json();
                const coursesData = await coursesResponse.json();
                const eventsData = await eventsResponse.json();
                const reviewsData = await reviewsResponse.json();
                const lessonInfoData = await lessonInfoResponse.json();
                const teamsData = await teamsResponse.json();

                dispatch({type: 'SET_CATEGORIES', payload: categoriesData});
                dispatch({type: 'SET_COURSES', payload: coursesData});
                dispatch({type: 'SET_EVENTS', payload: eventsData});
                dispatch({type: 'SET_REVIEWS', payload: reviewsData});
                dispatch({type: 'SET_LESSON_INFO', payload: lessonInfoData});
                dispatch({type: 'SET_TEAMS', payload: teamsData});
            } catch (error) {
                dispatch({type: 'SET_ERROR', payload: error.message});
            } finally {
                dispatch({type: 'SET_LOADING', payload: false});
            }
        };

        fetchData();
    }, [language]);

    const getCategoriesById = (id) => state.categories.find(course => course.id === parseInt(id));
    const getCoursesById = (id) => state.courses.find(course => course.id === parseInt(id));
    const getCoursesByCategory = (id) => state.courses.filter(course => course.category.id === parseInt(id));
    const getEventById = (id) => state.events.find(event => event.id === parseInt(id));
    const getImageUrl = (image) => {
        return image && typeof image === 'string'
            ? image.startsWith('https')
                ? image
                : `https://dev.gekoeducation.com${image}`
            : 'https://eduma.thimpress.com/wp-content/uploads/2022/07/thumnail-cate-7-170x170.png';
    };
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: orange;"></span>`;
    };
    // Рендерим компонент только после загрузки данных или ошибки
    if (state.loading) {
        return null;
    }

    if (state.error) {
        return null;
    }

    return (
        <DataContext.Provider value={{
            getCoursesByCategory,
            getCategoriesById,
            getCoursesById,
            getEventById,
            getImageUrl,
            renderBullet,
            categories: state.categories,
            events: state.events,
            courses: state.courses,
            reviews: state.reviews,
            lessonInfo: state.lessonInfo,
            teams: state.teams,
            error: state.error
        }}>
            {children}
        </DataContext.Provider>
    );
};
