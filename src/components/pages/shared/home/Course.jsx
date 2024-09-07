import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import {useLayoutEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const CourseSlider = () => {
    const nav = useNavigate()
    const { t } = useTranslation();

    const [slidesToShow, setSlidesToShow] = useState(5)
    const [spaceBetween, setSpaceBetween] = useState(30)
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: orange; "></span>`; // Установите цвет фона в orange
    };
    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth
            if (screenWidth >= 992) {
                setSlidesToShow(6)
                setSpaceBetween(30)
            } else if (screenWidth >= 480) {
                setSlidesToShow(4)
                setSpaceBetween(10)
            } else {
                setSlidesToShow(2)
                setSpaceBetween(30)
            }
        }

        updateSlidesToShow()
        window.addEventListener('resize', updateSlidesToShow)
        return () => {
            window.removeEventListener('resize', updateSlidesToShow)
        }
    }, [])
    const coursesArray = t('coursesArray', {returnObjects: true});

    return (
        <div className="max:px-5 py-16 mx-auto max-w-[1200px]">
            <Swiper
                loop={true}
                modules={[Pagination, A11y]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesToShow}
                pagination={{
                    type:"bullets",
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
                {coursesArray.map(({image, id, text}) => (
                    <SwiperSlide key={id}

                                 style={{
                                     display: 'flex',
                                     justifyContent: 'center',
                                 }}
                    >

                        <article
                            onClick={() => nav(`/course-category/${id}`)}
                            className="cursor-pointer flex-wrap img-wrapper mb-[40px] relative bg-primary rounded-lg  overflow-hidden md:w-[162px] max:w-[220px] flex flex-col justify-center items-center"
                            style={{
                                aspectRatio: "1 / 1"
                            }}>
                            <img className="inner-img absolute inset-0 w-full  object-cover" src={image}
                                 alt="Course" style={{
                                filter: 'brightness(50%)',
                                objectFit: 'cover', // Ресайз изображения по краям с сохранением пропорций
                                width: '100%', // Ширина 100%
                                height: '100%', // Высота 100%
                            }}/>
                            <p className="absoluteP absolute font-bold text-pseudo  hover:text-primary text-base font-roboto-slab top-[50%] left-[50%] w-[90%] text-center z-50 uppercase">{t(text)}</p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default CourseSlider;
