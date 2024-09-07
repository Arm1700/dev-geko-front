import React from "react";
import Course from '../shared/home/Course'
import MainPhoto from './MainPhoto'
import PopularCourse from '../shared/home/PopularCourse'
import lessonInfoArray from '../../../entities/lessonInfoArray'
import LessonInfo from '../shared/home/LessonInfo'
import books from '../../../images/books.jpg'
import Event from '../shared/event/Event'
import Reviews from '../shared/home/Review'
import {useNavigate} from "react-router-dom";
import {useTranslation} from 'react-i18next';


export default function Home() {
    const {t} = useTranslation()
    const nav = useNavigate();
    const handleCategoryClick = () => {
        nav(`/course-category`);
    };
    const handleEventsClick = () => {
        nav(`/events`);
    };
    const url = 'https://www.shutterstock.com/shutterstock/videos/1086751859/preview/stock-footage-video-of-financial-data-processing-over-diverse-business-people-global-business-finances.webm'
    const popularCoursesArrayHome = t('popularCoursesArrayHome', {returnObjects: true});
    const eventsArray = t('eventsArray', {returnObjects: true});

    return (<main>
            <MainPhoto image={url} text1="The_best_time_for" text2="education"/>
            <Course/>
            <div
                className="flex content-center justify-center gap-20 py-10">
                <div className='popularDiv mx-[auto] px-5 '>
                    <div className="flex justify-between">
                        <div className="text-start">
                            <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                                {t('popular_cours')}
                            </h1>
                            {/*<p className="text-md text-secondaryLight text-custom-15">*/}
                            {/*    {t('Limitless_learning_more_possibilities')}*/}
                            {/*</p>*/}
                        </div>
                        <button
                            className="text-sm uppercase font-light border-2 px-[20px] py-[7px] h-[50%] rounded-[4px]"
                            onClick={() => handleCategoryClick()}>
                            {t('View_All')}
                        </button>
                    </div>
                    <div className="popular">
                        {popularCoursesArrayHome.map(({image, id, title}) => {
                            return (<PopularCourse
                                id={id}
                                image={image}
                                title={title}
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
                {lessonInfoArray.map(({id, icon, title, count}) => {
                    return <LessonInfo key={id} Icon={icon} title={t(title)} count={count}/>
                })}
            </div>

            <div className="text-start pt-20 px-5 flex justify-center">
                <div className='max-w-[1200px] mx-[auto]'>
                    <div className="flex justify-between">
                        <div className="text-start">
                            <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                                {t('EVENTS')}
                            </h1>
                            <p className="text-custom-15 text-secondaryLight">
                                {t('Upcoming_Education_Events_to_feed_your_brain')}
                            </p>
                        </div>
                        <button
                            className="text-sm uppercase font-light border-2 px-[20px] py-[7px] h-[50%] rounded-[4px]"
                            onClick={() => handleEventsClick()}>
                            {t('View_All')}
                        </button>
                    </div>
                    {eventsArray.filter(event => event.status === "expired").slice(0, 3).map(({id, day, month, title, hour, place, description, image}) => {
                        return (<Event
                            id={id}
                            day={day}
                            month={month}
                            title={title}
                            hour={hour}
                            place={place}
                            description={description}
                            image={image}
                        />)
                    },)}
                </div>
            </div>
            <div className="text-center lg:px-20 px-5 pt-10 pb-5">
                <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                    {t('What_People_Say')}
                </h1>
                <p className="text-md text-secondaryLight text-custom-15">
                    {t('How_real_people_said_about_Education_WordPress_Theme')}
                </p>
            </div>
            <div className="text-start lg:px-20 px-5 pt-5">
                <Reviews/>
            </div>
        </main>
    )
}
