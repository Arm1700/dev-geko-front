import React, { createContext, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { dataReducer, initialState } from "./dataReducer";

// Создаем контекст
export const DataContext = createContext();
export const BASE_URL = "https://dev.gekoeducation.com";

export const DataProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const language = i18n.language;

    const [state, dispatch] = useReducer(dataReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "SET_LOADING", payload: true });
            try {
                const endpoints = [
                    `${BASE_URL}/api/categories/?language=${language}`,
                    `${BASE_URL}/api/popular_courses/?language=${language}`,
                    `${BASE_URL}/api/events/?language=${language}`,
                    `${BASE_URL}/api/reviews/?language=${language}`,
                    `${BASE_URL}/api/lesson_info/?language=${language}`,
                    `${BASE_URL}/api/team/?language=${language}`,
                ];

                const responses = await Promise.all(endpoints.map((url) => fetch(url)));

                if (responses.some((res) => !res.ok)) {
                    throw new Error("Ошибка при загрузке данных");
                }

                const [categories, courses, events, reviews, lessonInfo, teams] = await Promise.all(
                    responses.map((res) => res.json())
                );

                dispatch({ type: "SET_CATEGORIES", payload: categories });
                dispatch({ type: "SET_COURSES", payload: courses });
                dispatch({ type: "SET_EVENTS", payload: events });
                dispatch({ type: "SET_REVIEWS", payload: reviews });
                dispatch({ type: "SET_LESSON_INFO", payload: lessonInfo });
                dispatch({ type: "SET_TEAMS", payload: teams });
            } catch (error) {
                dispatch({ type: "SET_ERROR", payload: error.message });
            } finally {
                dispatch({ type: "SET_LOADING", payload: false });
            }
        };

        fetchData();
    }, [language]);

    const getCategoriesById = (id) => state.categories.find((category) => category.id === parseInt(id));
    const getCoursesById = (id) => state.courses.find((course) => course.id === parseInt(id));
    const getCoursesByCategory = (id) => state.courses.filter((course) => course.category.id === parseInt(id));
    const getEventById = (id) => state.events.find((event) => event.id === parseInt(id));

    const getImageUrl = (image) => {
        if (!image) return "https://eduma.thimpress.com/wp-content/uploads/2022/07/thumnail-cate-7-170x170.png";
        return image.startsWith("https") ? image : `${BASE_URL}${image}`;
    };
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: orange;"></span>`;
    };

    return (
        <DataContext.Provider
            value={{
                ...state,
                getCategoriesById,
                getCoursesById,
                getCoursesByCategory,
                getEventById,
                getImageUrl,
                renderBullet,
                BASE_URL
            }}
        >
            {state.loading ? <div>Загрузка...</div> : children}
        </DataContext.Provider>
    );
};
