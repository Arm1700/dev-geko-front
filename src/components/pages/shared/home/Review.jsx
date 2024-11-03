import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function Review({ reviewsArray }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const swiperThumbsRef = useRef(null);
    const swiperContentRef = useRef(null);

    // Adjust slider display based on screen width
    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 992) setSlidesToShow(3);
            else if (screenWidth >= 480) setSlidesToShow(2);
            else setSlidesToShow(1);
        }

        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);
        return () => window.removeEventListener("resize", updateSlidesToShow);
    }, []);

    // Sync slider positions
    const onSlideChange = (swiper) => {
        const activeIndex = swiper.activeIndex;
        if (activeIndex !== currentIndex) {
            setCurrentIndex(activeIndex);
        }
    };

    useEffect(() => {
        if (swiperThumbsRef.current) swiperThumbsRef.current.slideTo(currentIndex);
        if (swiperContentRef.current) swiperContentRef.current.slideTo(currentIndex);
    }, [currentIndex]);

    return (
        <div className="flex flex-col relative">
            {/* Thumbnail Slider */}
            <div className="px-5 max-w-[900px] mx-auto">
                <Swiper
                    loop
                    modules={[A11y]}
                    slidesPerView={slidesToShow}
                    spaceBetween={20}
                    speed={500}
                    onSlideChange={onSlideChange}
                    onSwiper={(swiper) => (swiperThumbsRef.current = swiper)}
                >
                    {reviewsArray.map((review, i) => (
                        <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="w-full">
                                <img
                                    src={review.image}
                                    className="rounded-full mx-auto p-2 border-color86"
                                    style={{
                                        border: i === currentIndex ? '2px dotted rgba(0, 0, 0, 0.5)' : 'none',
                                        opacity: i === currentIndex ? '1' : '0.5',
                                        width: i === currentIndex ? '100px' : '80px',
                                        height: i === currentIndex ? '100px' : '80px',
                                        transition: 'all 0.3s ease',
                                    }}
                                    alt={`user ${review.name}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content Slider */}
            <div className="px-5 max-w-[900px] mx-auto">
                <Swiper
                    loop
                    modules={[Navigation, A11y]}
                    slidesPerView={1}
                    spaceBetween={20}
                    speed={500}
                    onSlideChange={onSlideChange}
                    onSwiper={(swiper) => (swiperContentRef.current = swiper)}
                >
                    {reviewsArray.map((review, i) => (
                        <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="flex justify-center items-center text-center flex-col">
                                <p className="mt-5 text-primaryDark font-bold text-lg">{review.name}</p>
                                <p className="mb-7 text-center text-color7C">{review.comment}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
