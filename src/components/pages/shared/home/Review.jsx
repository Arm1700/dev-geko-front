import React, { useState, useRef } from 'react'
import reviewsArray from '../../../../entities/reviewsArray'
import Slider from 'react-slick'

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderUp = useRef(null);
  const sliderDown = useRef(null);
  const [centerItemIndex, setCenterItemIndex] = useState(0);

  const settingsMultiple = {
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    className: 'center',
    beforeChange: (oldIndex, newIndex) => {
      sliderDown.current.slickGoTo(newIndex);
      setCurrentIndex(newIndex);
    },
    afterChange: (index) => {
      setCenterItemIndex(index);
    },
    centerMode: true,
    centerPadding: '0',
  };

  console.log(centerItemIndex,'centerItemIndex')
  const settingsSingle = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    pauseOnHover: true,
  };


 return (
    <div className="mx-auto w-[70%]">
      <Slider ref={sliderUp} {...settingsMultiple}>
        {reviewsArray.map((review, i) => (
          <div key={review.id} className="text-center">
            <img
              src={review.image}
              height={i === centerItemIndex ? 140 : 100}
              width={i === centerItemIndex ? 140 : 100}
              className={`rounded-full mx-auto p-2 border-2 border-dashed border-primary `}
              alt={'user ' + review.name}
            />
            <p className="my-3">{review.name}</p>
          </div>
        ))}
      </Slider>
      <Slider ref={sliderDown} {...settingsSingle}>
        {reviewsArray.map(review => (
          <div
            key={review.id}
            className="flex my-5 w-80 justify-center items-center"
          >
            <p className="text-center">{review.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}
