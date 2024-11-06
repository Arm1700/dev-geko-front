import React, {useState, useLayoutEffect, useRef, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useTranslation} from "react-i18next";

export default function Team() {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Create refs for both sliders
    const thumbnailSliderRef = useRef(null);
    const contentSliderRef = useRef(null);
    const {i18n} = useTranslation();
    const language = i18n.language;
    const [teamArray, setTeamArray] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:8000/api/team/?language=${language}`);
                const response = await fetch(`https://dev.gekoeducation.com/api/team/?language=${language}`);
                const data = await response.json();
                console.log(data)
                setTeamArray(data); // Сохранение курсов в состояние
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [language]);

    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 768) setSlidesToShow(3);
            else setSlidesToShow(1);
        }

        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);
        return () => window.removeEventListener("resize", updateSlidesToShow);
    }, []);

    const syncSliders = (next) => {
        setCurrentIndex(next);
        thumbnailSliderRef.current.slickGoTo(next);
        contentSliderRef.current.slickGoTo(next);
    };

    const thumbnailSettings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: "20px",  // Padding to show slides on the left and right
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        speed: 500,
        beforeChange: (_, next) => syncSliders(next),
    };

    const contentSettings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        // adaptiveHeight: true,
        fade: true,
        beforeChange: (_, next) => syncSliders(next),
    };

    return (
        <div className="flex justify-center relative">
            <div className='min-w-[1%] max-w-[60%]'>
                <Slider ref={thumbnailSliderRef} {...thumbnailSettings}>
                    {teamArray.map((team, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={team.image && team.image.startsWith('http') ? team.image : team.image ? `https://dev.gekoeducation.com${team.image}` : 'https://eduma.thimpress.com/wp-content/uploads/2022/07/thumnail-cate-7-170x170.png'}
                                    className="rounded-full p-2 border-color86"
                                    style={{
                                        border: i === currentIndex ? '2px dotted rgba(0, 0, 0, 0.5)' : 'none',
                                        opacity: i === currentIndex ? '1' : '0.5',
                                        width: i === currentIndex ? '130px' : '100px',
                                        height: i === currentIndex ? '130px' : '100px',
                                        transition: 'all 0.3s ease',
                                    }}
                                    alt={`user ${team.translation.name}`}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Content Slider */}
                <Slider ref={contentSliderRef} {...contentSettings}>
                    {teamArray.map((team, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="flex justify-center items-center text-center flex-col">
                                <p className="mt-5 text-primaryDark font-bold text-lg">{team.translation.name}</p>
                                <p className="mb-7 text-center text-primaryDark">{team.translation.desc}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
