import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const language = i18n.language;

    const [courses, setCourses] = useState([]);
    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [lessonInfo, setLessonInfo] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
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

                if (!categoriesResponse.ok) throw new Error(`Error fetching courses: ${categoriesResponse.statusText}`);
                if (!coursesResponse.ok) throw new Error(`Error fetching popular courses: ${coursesResponse.statusText}`);
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

                setCategories(categoriesData);
                setCourses(coursesData);
                setEvents(eventsData);
                setReviews(reviewsData);
                setLessonInfo(lessonInfoData);
                setTeams(teamsData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [language]);

    const getCategoriesById = (id) => categories.find(course => course.id === parseInt(id));
    const getCoursesById = (id) => courses.find(course => course.id === parseInt(id));
    const getEventById = (id) => events.find(event => event.id === parseInt(id));

    if (loading) {
        console.log("Data is still loading...");
        return null;
    }

    if (error) {
        console.error("Error fetching data:", error);
        return null;
    }

    return (
        <DataContext.Provider value={{
            getCategoriesById,
            getCoursesById,
            getEventById,
            categories,
            events,
            courses,
            reviews,
            lessonInfo,
            loading,
            teams,
            error
        }}>
            {children}
        </DataContext.Provider>
    );
};
