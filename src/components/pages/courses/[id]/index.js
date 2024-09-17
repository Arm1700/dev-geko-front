import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {TbClockHour9} from 'react-icons/tb'
import {IoLanguage} from 'react-icons/io5'
import {IoPricetag} from 'react-icons/io5'
import {PiStudentBold} from 'react-icons/pi'
import {MdAssessment} from 'react-icons/md'
import Error404 from '../../shared/Error'
import {A11y, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import PopularCourse from "../../shared/home/PopularCourse";
import {useTranslation} from "react-i18next";

export default function CoursePage() {
    const {t,i18n} = useTranslation();
    const language = i18n.language;
    const [popularCoursesArray, setPopularCoursesArray] = useState([]);
    const {id: course,} = useParams()
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: orange; "></span>`; // Установите цвет фона в orange
    };

    const [slidesToShow, setSlidesToShow] = useState(3)
    const [spaceBetween, setSpaceBetween] = useState(30)
    const [pickedCourse, setPickedCourse] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`https://dev.gekoeducation.com/api/popular_courses/?language=${language}`);
                const data = await response.json();
                console.log(data)
                setPopularCoursesArray(data); // Сохранение курсов в состояние
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();

    }, [language]);

    useEffect(() => {
        if (popularCoursesArray.length > 0 && course) {
            const selectedCourse = popularCoursesArray.find(el => el.id === +course);
            setPickedCourse(selectedCourse);
        }
    }, [course, popularCoursesArray]);

    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth
            if (screenWidth >= 992) {
                setSlidesToShow(3)
                setSpaceBetween(30)
            } else if (screenWidth >= 480) {
                setSlidesToShow(2)
                setSpaceBetween(10)
            } else {
                setSlidesToShow(1)
                setSpaceBetween(30)
            }
        }
        updateSlidesToShow()
        window.addEventListener('resize', updateSlidesToShow)
        return () => {
            window.removeEventListener('resize', updateSlidesToShow)
        }
    }, [])
    // const coursesArray = t('coursesArray', {returnObjects: true});
    return (
        <section className="bgColorArticle md:before:h-[300px] before:h-[0] relative pb-5">
            {pickedCourse?.id ? (
                <>
                    <article className="grid  md:grid-cols-[70%_1fr] grid-cols-1 max-w-[1200px] mx-[auto] relative">
                        <div className="flex flex-col relative px-auto text-pseudo pt-[75px] justify-center py-10">
                            <div className="flex flex-col gap-[20px] px-5">
                                <p className="text-3xl font-roboto-slab">{pickedCourse.translation.title}</p>
                                <p className="text-custom-15 opacity-80 ">{pickedCourse.translation.desc}</p>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-xs capitalize">{t("Categories")}</p>
                                    <p className="text-custom-15">{t(pickedCourse.category.translation.text)}</p>
                                </div>
                            </div>

                            <div className="w-[100%] flex md:hidden  h-[100%] absolute bg-primaryDark z-[-1]">

                            </div>
                        </div>

                        <div
                            className="flex  flex-col lg:mx-1 mx-5  md:sticky static border-[1px]  top-1 mt-8  h-min  gap-[10px] bg-pseudo"
                            style={{
                                gridRow: "span 2"
                            }}>
                            <img src={pickedCourse.image} alt={pickedCourse.translation.title}/>
                            <div className="flex flex-col justify-start  items-start px-[20px] py-[20px] gap-[10px]">
                                <button
                                    className="self-center w-[100%] py-[10px] px-[25px] rounded-[4px] uppercase font-bold text-white text-sm bg-primary">sign
                                    up
                                </button>
                                <h1 className="text-xl pb-3 font-roboto-slab font-bold text-primaryDark pt-[20px]">
                                    Course Features
                                </h1>
                                <div className="flex items-center gap-3 text-color60 text-custom-15">
                                    <TbClockHour9 className="text-primary"/>
                                    Duration {pickedCourse.duration}
                                </div>
                                <div className="flex  items-center gap-3 text-color60 text-custom-15">
                                    <IoLanguage className="text-primary"/>
                                    Language {pickedCourse.lang}
                                </div>
                                <div className="flex  items-center gap-3 text-color60 text-custom-15">
                                    <IoPricetag className="text-primary"/>
                                    Price {pickedCourse.price}
                                </div>
                                <div className="flex  items-center gap-3 text-color60 text-custom-15">
                                    <PiStudentBold className="text-primary"/>
                                    Students {pickedCourse.students}
                                </div>
                                <div className="flex  items-center gap-3 text-color60 text-custom-15">
                                    <MdAssessment className="text-primary"/>
                                    Assessments {pickedCourse.translation.assessments}
                                </div>
                                <ul className="flex px-[9px] justify-center items-center gap-3 w-full pt-3">
                                    <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                        <i className="fa fa-facebook-f"></i>
                                    </li>
                                    <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                        <i className="fa fa-instagram"></i>
                                    </li>
                                    <li className="flex items-center justify-center w-[32px] h-[32px] border-2 rounded-full opacity-50">
                                        <i className="fa fa-youtube-play"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="pr-2 md:order-none py-10 px-5  order-2">
                            <h2 className="text-lg uppercase w-full font-roboto-slab font-bold pb-5 pt-10 border-b text-primaryDark">
                                Overview
                            </h2>
                            <div className="text-start  pt-5 ">
                                <h1 className="text-lg font-roboto-slab font-bold text-primaryDark">
                                    COURSE DESCRIPTION
                                </h1>
                                <p className="text-custom-15 text-color60">{pickedCourse.translation.desc}</p>
                            </div>

                            <div className="text-start pt-5 ">
                                <h1 className="text-lg font-roboto-slab font-bold text-primaryDark">
                                    CERTIFICATION
                                </h1>
                                <p className="text-custom-15 text-color60">{pickedCourse.translation.certification}</p>
                            </div>

                            <div className="text-start pt-5 ">
                                <h1 className="text-lg font-roboto-slab font-bold text-primaryDark">
                                    LEARNING OUTCOMES
                                </h1>
                                <ul className="list-none text-primary">
                                    {pickedCourse.translation.outcomed?.map((el, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className="text-md flex items-center text-secondaryLight"
                                            >
                                                <span className="w-[6px] h-[6px] bg-primary rounded-full mr-2"></span>
                                                {el}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <p className="like relative uppercase font-roboto-slab text-2xl pt-10 font-bold">
                                {t("You_May_Like")}
                            </p>
                            <Swiper
                                loop={true}
                                modules={[Pagination, A11y]}
                                spaceBetween={spaceBetween}
                                slidesPerView={slidesToShow}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                    dynamicMainBullets: 2,
                                    renderBullet,
                                }}

                                speed={500}
                                navigation
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                {popularCoursesArray.slice(0, 6).map(({image, id, translation}) => (
                                    <SwiperSlide key={id}>
                                        <PopularCourse
                                            id={id}
                                            image={image}
                                            title={translation.title}
                                            key={id}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </article>

                </>
            ) : (
                <Error404/>
            )}
        </section>
    )
}
