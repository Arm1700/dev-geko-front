import React, {useContext} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Импорт стилей skeleton
import Course from '../shared/home/Course';
import MainPhoto from './MainPhoto';
import PopularCourse from '../shared/home/PopularCourse';
import LessonInfo from '../shared/home/LessonInfo';
import Event from '../shared/event/Event';
import Reviews from '../shared/home/Review';
import {useNavigate} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import {DataContext} from "../context/DataProvider";
import RegisterForm from "./RegisterForm";

export default function Home() {
    const {t} = useTranslation();
    const {events, courses, lessonInfo, loading} = useContext(DataContext);
    const nav = useNavigate();

    const handleCategoryClick = () => {
        nav(`/course-category`);
    };

    const handleEventsClick = () => {
        nav(`/events`);
    };

    return (
        <main>
            <div className='relative md:flex grid grid-rows-2 md:justify-end justify-center items-center py-5 md:px-5'>
                <MainPhoto text1="The_best_time_for" text2="education"/>
                <div
                    className="relative top-0 mx-auto md:mx-0 h-auto flex flex-col justify-center items-center z-30 overflow-hidden border-[1px] rounded-[20px]">
                    <RegisterForm check={false}/>
                </div>
            </div>


            <Course/>

            <div className="flex content-center justify-center gap-20 py-10">
                <div className='popularDiv mx-[auto] px-5'>
                    <div className="flex justify-between">
                        <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                            {t('popular_cours')}
                        </h1>
                        <button
                            className="text-sm uppercase font-light border-2 px-[20px] py-[7px] h-[50%] rounded-[4px]"
                            onClick={() => handleCategoryClick()}>
                            {t('View_All')}
                        </button>
                    </div>

                    <div className="popular grid md:grid-cols-4 sm500:grid-cols-2 grid-cols-1">
                        {loading ? (
                            // Skeleton-заполнитель для популярных курсов
                            Array.from({length: 4}).map((_, index) => (
                                <div key={index} className="p-4">
                                    <Skeleton height={200}/>
                                    <Skeleton height={20} width={`80%`} style={{margin: '10px 0'}}/>
                                </div>
                            ))
                        ) : (
                            courses.map(({image, id, translation}) => (
                                <PopularCourse
                                    id={id}
                                    image={image}
                                    title={translation.title}
                                    key={id}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${'images/books.jpg'})`,
                }}
                className="bg-cover gap-5 bg-no-repeat lg:px-20 px-5 py-10 bg-primary grid grid-cols-5 lg:justify-evenly items-end max:flex-col"
            >
                {loading ? (
                    // Skeleton-заполнитель для информации о курсах
                    Array.from({length: 3}).map((_, index) => (
                        <div key={index} className="p-4">
                            <Skeleton circle={true} height={50} width={50}/>
                            <Skeleton height={20} width={`60%`} style={{margin: '10px 0'}}/>
                        </div>
                    ))
                ) : (
                    lessonInfo.map(({id, image, translation}) => (
                        <LessonInfo key={id} image={image} title={translation.title}/>
                    ))
                )}
            </div>

            <div className="text-start pt-20 px-5 flex justify-center">
                <div className='center:max-w-[1200px] max-w-full'>
                    <div className="flex justify-between">
                        <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                            {t('EVENTS')}
                        </h1>
                        <button
                            className="text-sm uppercase font-light border-2 py-[7px] px-[20px] h-[50%] rounded-[4px]"
                            onClick={() => handleEventsClick()}>
                            {t('View_All')}
                        </button>
                    </div>
                    {loading ? (
                        // Skeleton-заполнитель для событий
                        Array.from({length: 3}).map((_, index) => (
                            <div key={index} className="p-4">
                                <Skeleton height={150}/>
                                <Skeleton height={20} width={`80%`} style={{margin: '10px 0'}}/>
                            </div>
                        ))
                    ) : (
                        events.filter(event => event.status === "completed")
                            .slice(0, 3).map((pickedEvent) => (
                            <Event
                                key={pickedEvent.id}
                                pickedEvent={pickedEvent}
                            />
                        ))
                    )}
                </div>
            </div>

            <div className='flex flex-col justify-center'>
                <div className="text-center lg:px-20 px-5 pt-10 pb-5">
                    <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                        {t('What_People_Say')}
                    </h1>
                </div>
                <div className="text-start lg:px-20 px-5 pt-5 min-h-[380px]">
                    {loading ? (
                        <Skeleton height={200} width={`100%`}/>
                    ) : (
                        <Reviews/>
                    )}
                </div>
            </div>
        </main>
    );
}
