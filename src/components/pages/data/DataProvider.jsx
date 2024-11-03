import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [certificate, setCertificate] = useState([]);
    const [events, setEvents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [lessonInfo, setLessonInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    coursesResponse,
                    certificatesResponse,
                    eventsResponse,
                    reviewsResponse,
                    lessonInfoResponse
                ] = await Promise.all([
                    fetch("https://dev.gekoeducation.com/api/categories/"),
                    fetch("https://dev.gekoeducation.com/api/popular_courses"),
                    fetch("https://dev.gekoeducation.com/api/events"),
                    fetch("https://dev.gekoeducation.com/api/reviews"),
                    fetch("https://dev.gekoeducation.com/api/lesson_info")
                ]);

                if (!coursesResponse.ok) throw new Error(`Error fetching courses: ${coursesResponse.statusText}`);
                if (!certificatesResponse.ok) throw new Error(`Error fetching certificates: ${certificatesResponse.statusText}`);
                if (!eventsResponse.ok) throw new Error(`Error fetching events: ${eventsResponse.statusText}`);
                if (!reviewsResponse.ok) throw new Error(`Error fetching reviews: ${reviewsResponse.statusText}`);
                if (!lessonInfoResponse.ok) throw new Error(`Error fetching lesson info: ${lessonInfoResponse.statusText}`);

                const coursesData = await coursesResponse.json();
                const certificatesData = await certificatesResponse.json();
                const eventsData = await eventsResponse.json();
                const reviewsData = await reviewsResponse.json();
                const lessonInfoData = await lessonInfoResponse.json();

                // Store data in localStorage
                localStorage.setItem('courses', JSON.stringify(coursesData));
                localStorage.setItem('certificates', JSON.stringify(certificatesData));
                localStorage.setItem('events', JSON.stringify(eventsData));
                localStorage.setItem('reviews', JSON.stringify(reviewsData));
                localStorage.setItem('lessonInfo', JSON.stringify(lessonInfoData));

                setCourses(coursesData);
                setCertificate(certificatesData);
                setEvents(eventsData);
                setReviews(reviewsData);
                setLessonInfo(lessonInfoData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // Load data from localStorage if available
        const savedCourses = localStorage.getItem('courses');
        const savedCertificates = localStorage.getItem('certificates');
        const savedEvents = localStorage.getItem('events');
        const savedReviews = localStorage.getItem('reviews');
        const savedLessonInfo = localStorage.getItem('lessonInfo');

        if (!savedCourses || !savedCertificates || !savedEvents || !savedReviews || !savedLessonInfo) {
            fetchData();
        } else {
            setCourses(JSON.parse(savedCourses));
            setCertificate(JSON.parse(savedCertificates));
            setEvents(JSON.parse(savedEvents));
            setReviews(JSON.parse(savedReviews));
            setLessonInfo(JSON.parse(savedLessonInfo));
            setLoading(false);
        }
    }, []);

    const getCourseById = (id) => courses.find(course => course.id === parseInt(id));
    const getEventById = (id) => events.find(event => event.id === parseInt(id));

    return (
        <DataContext.Provider value={{
            courses,
            getCourseById,
            getEventById,
            events,
            certificate,
            reviews,
            lessonInfo,
            loading,
            error
        }}>
            {children}
        </DataContext.Provider>
    );
};
