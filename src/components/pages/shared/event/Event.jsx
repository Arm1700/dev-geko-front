import React, { useState } from 'react';
import { MdOutlinePlace } from 'react-icons/md';
import { TbClockHour3 } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Event({
                                  id, day, month, title, hour, place, description, event_galleries
                              }) {
    const nav = useNavigate();
    const handleCategoryClick = (id) => {
        nav(`/events/${id}`);
    };

    const [isMenuVisible, setMenuVisible] = useState(false);
    const [autoplayTimeoutId, setAutoplayTimeoutId] = useState(null); // Для хранения идентификатора таймера

    const handleMouseEnter = () => {
        setMenuVisible(true);
    };

    const handleMouseLeave = () => {
        setMenuVisible(false);
    };

    const handleInteraction = (swiper) => {
        swiper.autoplay.stop();

        if (autoplayTimeoutId) {
            clearTimeout(autoplayTimeoutId);
        }

        const timeoutId = setTimeout(() => {
            swiper.autoplay.start();
            setAutoplayTimeoutId(null);
        }, 3000);

        setAutoplayTimeoutId(timeoutId);
    };

    const { t } = useTranslation();

    return (
        <section
            className="border-b-2 py-8 border-gray-300 flex gap-5 sm:justify-between sm:items-center sm:flex-row flex-col max:relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`flex flex-col gap-1 sm:static w-[200px] max:w-[100px] md:mr-10 mr-0 max:bg-white max:text-center max:absolute max:top-[10%] max:left-[3%] ${isMenuVisible ? 'border-color56' : ''}`}
            >
                <span className="text-primary font-bold text-6xl leading-60">
                    {day}
                </span>
                <span className="text-color60 leading-[25px] font-sans-serif">{t(month)}</span>
            </div>

            <div className="gap-2 flex middle:px-5 md:px-20 px-0 flex-col sm:order-none max:order-1" style={{ maxWidth: "60%" }}>
                <h5 className="text-lg font-bold hover:text-primary transition-colors duration-300 cursor-pointer"
                    onClick={() => handleCategoryClick(id)}
                >{t(title)}</h5>
                <div className="flex gap-1 items-center">
                    <TbClockHour3 className="text-primary w-[21px]" /> <span className="text-sm">{hour}</span>
                    <MdOutlinePlace className="text-primary " /> <span className="text-sm">{t(place)}</span>
                </div>
                <p className=" text-primaryDark text-custom-15 center">{t(description)}</p>
            </div>

            <div className='w-full md:w-[30%] sm:w-[40%] max:w-[80%]'>
                <Swiper
                    loop={true}
                    modules={[A11y, Autoplay]}
                    speed={500}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    onTouchStart={(swiper) => handleInteraction(swiper)}
                    onClick={(swiper) => handleInteraction(swiper)}
                >
                    {event_galleries.map(({ img, id, translation }) => (
                        <SwiperSlide key={id}>
                            <img alt={"image " + t(description)} src={img}
                                 className="rounded-md w-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
