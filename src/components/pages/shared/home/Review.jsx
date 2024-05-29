import React, {useState, useEffect, useRef} from 'react';
import reviewsArray from '../../../../entities/reviewsArray';
import Slider from 'react-slick';

export default function Review() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    const onSlideChange = (index) => {
        setCurrentIndex(index);
    };

    console.log()
    return (
        <div className="slider-container relative">
            <div>
                <div className='px-5 max-w-[500px] mx-[auto]'>
                    <Slider
                        asNavFor={nav1}
                        ref={sliderRef2}
                        slidesToShow={5} // Dynamically adjust based on array length
                        swipeToSlide={true}
                        focusOnSelect={true}
                        centerMode={true}
                        initialSlide={0} // Start at the center
                        centerPadding={"0"}  // Remove center padding for smaller screens
                        variableWidth={false}  // Disable variable width for smaller screens
                        afterChange={onSlideChange}
                        responsive={[
                            {
                                breakpoint: 768, // Adjust breakpoint for smaller screens if needed
                                settings: {
                                    slidesToShow: 3,
                                    initialSlide: 3, // Start at the center
                                },
                            },
                        ]} // Handle responsiveness (optional)
                    >
                        {reviewsArray.map((review, i) => (
                            <div key={review.id} className="text-center">
                                <img
                                    src={review.image}

                                    className={`rounded-full mx-auto p-2 border-color86 `}
                                    style={{
                                        border: i === currentIndex ? "2px rgba(0, 0, 0, 0.5)" : "none",
                                        borderStyle: i === currentIndex ? "dotted" : "none",
                                        opacity: i === currentIndex ? "1" : "0.5",
                                        maxWidth: i === currentIndex ? "100px" : "80px",
                                        aspectRatio: "1 / 1",
                                    }}
                                    alt={'user ' + review.name}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div>
                <div className='px-5 max-w-[900px] mx-[auto]'>
                    <Slider asNavFor={nav2} ref={sliderRef1}>
                        {reviewsArray.map((review) => (
                            <div key={review.id} className="flex justify-center items-center text-center">
                                <p className="mt-5 text-primaryDark font-bold text-lg">{review.name}</p>
                                <p className="mb-4 text-color85">{review.developer}</p>
                                <p className="mb-7 text-center text-color7C">{review.comment}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
