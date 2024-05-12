import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import reviewsArray from '../../../../entities/reviewsArray';
import Slider from 'react-slick';
import {logDOM} from "@testing-library/react";

export default function Review() {
    const [currentIndex, setCurrentIndex] = useState(3);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(5)

    // useLayoutEffect(() => {
    //     function updateSlidesToShow() {
    //         const screenWidth = window.innerWidth
    //         if (screenWidth >= 640) {
    //             setSlidesToShow(5)
    //         } else{
    //             setSlidesToShow(3)
    //         }
    //     }
    //
    //     updateSlidesToShow()
    //     window.addEventListener('resize', updateSlidesToShow)
    //     return () => {
    //         window.removeEventListener('resize', updateSlidesToShow)
    //     }
    // }, [])
    useEffect(() => {
        // setCurrentIndex(3);
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    const onSlideChange = (index) => {
        setCurrentIndex(index);
    };

    const calculateCenterIndex = (slideCount) => {
        // Handle edge cases for slideCount <= 2
        if (slideCount <= 2) {
            return 0;
        }
        return Math.floor((slideCount - 1) / 2);
    };

    return (
        <div className="mx-auto w-[70%] slider-container">
            <Slider
                asNavFor={nav1}
                ref={sliderRef2}
                slidesToShow={5} // Dynamically adjust based on array length
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                infinite={true}
                initialSlide={5} // Start at the center
                centerPadding={"0"}  // Remove center padding for smaller screens
                variableWidth={false}  // Disable variable width for smaller screens
                afterChange={onSlideChange}
                responsive={[
                    {
                        breakpoint: 768, // Adjust breakpoint for smaller screens if needed
                        settings: {
                            slidesToShow: 3,
                            initialSlide: 3, // Start at the center
                            centerMode: true, // Disable center mode for smaller screens
                            centerPadding: "0", // Remove center padding for smaller screens
                            variableWidth: false, // Disable variable width for smaller screens
                        },
                    },
                ]} // Handle responsiveness (optional)
            >
                {reviewsArray.map((review, i) => (
                    <div key={review.id} className="text-center">
                        <img
                            src={review.image}
                            height={i === currentIndex ? 140 : 100} // Adjust image size based on index
                            width={i === currentIndex ? 140 : 100}
                            className={`rounded-full mx-auto p-2 border-2 border-dashed border-primary`}
                            alt={'user ' + review.name}
                        />
                        <p className="my-3">{review.name}</p>
                    </div>
                ))}
            </Slider>

            <Slider asNavFor={nav2} ref={sliderRef1}>
                {reviewsArray.map((review) => (
                    <div key={review.id} className="flex my-5 justify-center items-center text-center">
                        <p className="text-center">{review.comment}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
