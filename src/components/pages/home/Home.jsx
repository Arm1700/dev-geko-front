import Course from '../shared/home/Course'
import MainPhoto from './MainPhoto'
import PopularCourse from '../shared/home/PopularCourse'
import popularCoursesArray from '../../../entities/popularCoursesArray'
import lessonInfoArray from '../../../entities/lessonInfoArray'
import LessonInfo from '../shared/home/LessonInfo'
import books from '../../../images/books.jpg'
import eventsArray from '../../../entities/eventsArray'
import Event from '../shared/event/Event'
import Reviews from '../shared/home/Review'
import {useNavigate} from "react-router-dom";

export default function Home() {
    const nav = useNavigate();
    const handleCategoryClick = () => {
        nav(`/course-category`);
    };
    const handleEventsClick = () => {
        nav(`/events`);
    };
    const url = 'https://www.shutterstock.com/shutterstock/videos/1086751859/preview/stock-footage-video-of-financial-data-processing-over-diverse-business-people-global-business-finances.webm'

    return (<main>
            <MainPhoto image={url} text1="The best time for" text2="education"/>
            <Course/>
            <div
                className="flex content-center justify-center gap-20 py-10">
                <div className='popularDiv mx-[auto] px-5 '>
                    <div className="flex justify-between">
                        <div className="text-start">
                            <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                                Popular Course​s
                            </h1>
                            <p className="text-md text-secondaryLight text-custom-15">
                                Limitless learning, more possibilities
                            </p>
                        </div>
                        <button
                            className="text-sm uppercase font-light border-2 px-[20px] py-[7px] h-[50%] rounded-[4px]"
                            onClick={() => handleCategoryClick()}>
                            View All
                        </button>
                    </div>
                    <div className="popular">
                        {popularCoursesArray.slice(0, 8).map(({image, id, title}) => {
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
                    return <LessonInfo key={id} Icon={icon} title={title} count={count}/>
                })}
            </div>

            <div className="text-start pt-20 px-5 flex justify-center">
                <div className='max-w-[1200px] mx-[auto]'>
                    <div className="flex justify-between">
                        <div className="text-start">
                            <h1 className="text-custom-28 font-roboto-slab font-bold text-primaryDark">
                                Events
                            </h1>
                            <p className="text-custom-15 text-secondaryLight">
                                Upcoming Education Events to feed your brain.
                            </p>
                        </div>
                        <button
                            className="text-sm uppercase font-light border-2 px-[20px] py-[7px] h-[50%] rounded-[4px]"
                            onClick={() => handleEventsClick()}>
                            View All
                        </button>
                    </div>
                    {eventsArray.map(({id, day, month, title, hour, place, description, image}) => {
                        return (<Event
                            key={id}
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
                    What People Say
                </h1>
                <p className="text-md text-secondaryLight text-custom-15">
                    How real people said about Education WordPress Theme
                </p>
            </div>
            <div className="text-start lg:px-20 px-5 pt-5">
                <Reviews/>
            </div>
        </main>
    )
}
