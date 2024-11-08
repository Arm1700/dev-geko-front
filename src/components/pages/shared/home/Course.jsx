import React, {useLayoutEffect, useState, useContext} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules'; // Импортируйте Autoplay
import 'swiper/css';
import 'swiper/css/pagination';

import { useNavigate } from "react-router-dom";
import {DataContext} from "../../context/DataProvider";

const CourseSlider = () => {
    const nav = useNavigate();
    const [slidesToShow, setSlidesToShow] = useState(5);
    const [spaceBetween, setSpaceBetween] = useState(30);
    const [autoplayTimeoutId, setAutoplayTimeoutId] = useState(null); // Для хранения идентификатора таймера

    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: orange;"></span>`;
    };

    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 992) {
                setSlidesToShow(6);
                setSpaceBetween(30);
            } else if (screenWidth >= 480) {
                setSlidesToShow(4);
                setSpaceBetween(10);
            } else {
                setSlidesToShow(2);
                setSpaceBetween(30);
            }
        }

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const {courses} = useContext(DataContext);


    const handleInteraction = (swiper) => {
        // Остановка автопрокрутки
        swiper.autoplay.stop();

        // Если таймер уже установлен, сбросьте его
        if (autoplayTimeoutId) {
            clearTimeout(autoplayTimeoutId);
        }

        // Установите новый таймер на 5 секунд
        const timeoutId = setTimeout(() => {
            swiper.autoplay.start(); // Возобновите автопрокрутку
            setAutoplayTimeoutId(null); // Сбросьте идентификатор таймера
        }, 3000);

        setAutoplayTimeoutId(timeoutId);
    };

    return (
        <div className="popularDiv max:px-0 py-16 mx-auto max-w-[1300px] px-[20px]">
            <Swiper
                modules={[Pagination, A11y,  Autoplay]} // Добавьте Autoplay
                spaceBetween={spaceBetween}
                slidesPerView={slidesToShow}
                loop={courses.length > slidesToShow}
                pagination={{
                    type: "bullets",
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 2,
                    renderBullet,
                }}
                speed={500}
                autoplay={{
                    delay: 1500, // Задержка между переключениями (в миллисекундах)
                    disableOnInteraction: false, // Продолжать автопрокрутку даже после взаимодействия
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                onTouchStart={(swiper) => handleInteraction(swiper)} // Обработка касания
                onClick={(swiper) => handleInteraction(swiper)} // Обработка клика
            >
                {courses.map(({ image, id, translation }) => (
                    <SwiperSlide key={id}
                                 style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <article
                            onClick={() => nav(`/course-category/${id}`)}
                            className="cursor-pointer flex-wrap img-wrapper mb-[40px] relative bg-primary rounded-lg overflow-hidden md:w-[162px] max:w-[220px] flex flex-col justify-center items-center"
                            style={{ aspectRatio: "1 / 1" }}>
                            <img className="inner-img absolute inset-0 w-full object-cover"
                                 src={image.startsWith('https') ? image : `https://dev.gekoeducation.com${image}`}
                                 alt="Course"
                                 style={{
                                     filter: 'brightness(50%)',
                                     objectFit: 'cover',
                                     width: '100%',
                                     height: '100%',
                                 }}/>
                            <p className="absoluteP absolute font-bold text-pseudo hover:text-primary text-base font-roboto-slab top-[50%] left-[50%] w-[90%] text-center z-50 uppercase">
                                {translation.text}
                            </p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CourseSlider;
