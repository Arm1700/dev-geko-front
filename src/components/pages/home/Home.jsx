import React, {useEffect, useState} from "react";
import Course from '../shared/home/Course'
import MainPhoto from './MainPhoto'
import PopularCourse from '../shared/home/PopularCourse'
import LessonInfo from '../shared/home/LessonInfo'
import books from '../../../images/books.jpg'
import Event from '../shared/event/Event'
import Reviews from '../shared/home/Review'
import {useNavigate} from "react-router-dom";
import {useTranslation} from 'react-i18next';

export default function Home() {

    const {t, i18n} = useTranslation();
    const language = i18n.language;
    const [lessonInfoArray, setLessonInfo] = useState([]);
    const [eventsArray, setEventsArray] = useState([]);
    const [popularCoursesArray, setPopularCoursesArray] = useState([]);

    const nav = useNavigate();
    const handleCategoryClick = () => {
        nav(`/course-category`);
    };
    const handleEventsClick = () => {
        nav(`/events`);
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:8000/api/popular_courses/?language=${language}`);
                const response = await fetch(`https://dev.gekoeducation.com/api/popular_courses/?language=${language}`);
                const data = await response.json();
                console.log(data);
                setPopularCoursesArray(data); // Сохранение курсов в состояние
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [language]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:8000/api/lesson_info/?language=${language}`);
                const response = await fetch(`https://dev.gekoeducation.com/api/lesson_info/?language=${language}`);
                const data = await response.json();
                console.log(data);
                setLessonInfo(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [language]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:8000/api/events/?language=${language}`);
                const response = await fetch(`https://dev.gekoeducation.com/api/events/?language=${language}`);
                const data = await response.json();
                console.log(data);
                setEventsArray(data); // Сохранение курсов в состояние
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [language]);


    return (<main>
        <MainPhoto text1="The_best_time_for" text2="education"/>
        <Course/>
        <div
            className="flex content-center justify-center gap-20 py-10">
            <div className='popularDiv mx-[auto] px-5 '>
                <div className="flex justify-between">
                    <div className="text-start">
                        <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                            {t('popular_cours')}
                        </h1>
                    </div>
                    <button
                        className="text-sm uppercase font-light border-2 px-[20px] py-[7px] h-[50%] rounded-[4px]"
                        onClick={() => handleCategoryClick()}>
                        {t('View_All')}
                    </button>
                </div>
                <div className="popular grid md:grid-cols-4 sm500:grid-cols-2 grid-cols-1">
                    {popularCoursesArray.map(({image, id, translation}) => {
                        return (<PopularCourse
                            id={id}
                            image={image}
                            title={translation.title}
                            key={id}
                        />)
                    })}
                </div>
            </div>
        </div>

        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${books})`,
            }}
            className="bg-cover bg-no-repeat lg:px-20 px-5 py-10 bg-primary flex  justify-center lg:justify-evenly flex-row middle:flex-row max:flex-col"
        >
            {lessonInfoArray.map(({id, icon, count, translation}) => {
                return <LessonInfo key={id} Icon={icon} title={t(translation.title)} count={count}/>
            })}
        </div>

        <div className="text-start pt-20 px-5 flex justify-center">
            <div className='max-w-[1200px] mx-[auto]'>
                <div className="flex justify-between">
                    <div className="text-start ">
                        <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                            {t('EVENTS')}
                        </h1>
                        <p className="text-custom-15 text-primaryDark">
                            {t('Upcoming_Education_Events_to_feed_your_brain')}
                        </p>
                    </div>
                    <button
                        className="text-sm uppercase font-light border-2 py-[7px] px-[20px] h-[50%] rounded-[4px]"
                        onClick={() => handleEventsClick()}>
                        {t('View_All')}
                    </button>
                </div>
                {eventsArray.filter(event => event.status === "completed")
                    .slice(0, 3).map(({
                                          id,
                                          day,
                                          month,
                                          hour,
                                          image,
                                          translation,
                                          event_galleries
                                      }) => {
                        return (<Event
                            key={id}
                            id={id}
                            day={day}
                            month={month}
                            title={translation.title}
                            hour={hour}
                            place={translation.place}
                            description={translation.description}
                            image={image}
                            event_galleries={event_galleries}
                        />)
                    },)}
            </div>
        </div>

        <div className='flex flex-col justify-center'>
            <div className="text-center lg:px-20 px-5 pt-10 pb-5">
                <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                    {t('What_People_Say')}
                </h1>
            </div>
            <div className="text-start lg:px-20 px-5 pt-5 min-h-[380px]">
                <Reviews/>
            </div>
        </div>
    </main>)
}
