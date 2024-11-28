import React, { useState, useRef, useLayoutEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel({ items, renderThumbnail, renderContent }) {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const thumbnailSliderRef = useRef(null);
    const contentSliderRef = useRef(null);

    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 768) setSlidesToShow(3); // 3 слайда на экранах шире 768px
            else setSlidesToShow(1); // 1 слайд на мобильных устройствах
        }

        updateSlidesToShow(); // При монтировании компонента
        window.addEventListener("resize", updateSlidesToShow); // Обновляем при изменении размера экрана
        return () => window.removeEventListener("resize", updateSlidesToShow); // Очистка при демонтировании компонента
    }, []);

    const syncSliders = (next) => {
        setCurrentIndex(next); // Обновляем текущий индекс
        thumbnailSliderRef.current.slickGoTo(next); // Синхронизируем слайдеры
        contentSliderRef.current.slickGoTo(next);
    };

    const thumbnailSettings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        slidesToShow: slidesToShow, // Количество слайдов, которое показываем
        slidesToScroll: 1,
        speed: 500,
        beforeChange: (_, next) => syncSliders(next), // Синхронизируем слайдеры при изменении
    };

    const contentSettings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true, // Плавное исчезновение между слайдами
        beforeChange: (_, next) => syncSliders(next), // Синхронизируем слайдеры при изменении
    };

    return (
        <div className="flex justify-center relative">
            <div className="min-w-[1%] max-w-full md:max-w-[60%] sm:max-w-[80%]">
                {/* Thumbnail Slider */}
                <Slider ref={thumbnailSliderRef} {...thumbnailSettings}>
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-center">
                            {renderThumbnail(item, index, currentIndex)}
                        </div>
                    ))}
                </Slider>

                {/* Content Slider */}
                <Slider ref={contentSliderRef} {...contentSettings}>
                    {items.map((item, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                            {renderContent(item, index)}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
