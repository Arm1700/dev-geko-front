import React, { useState, useRef, useEffect } from 'react'
import reviewsArray from '../../../../entities/reviewsArray'
import Slider from 'react-slick'

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderUp = useRef(null)
  const sliderDown = useRef(null)
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 780 ? 3 : 5,
  )

  const settingsMultiple = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    className: 'center',
    beforeChange: (oldIndex, newIndex) => {
      sliderDown.current.slickGoTo(newIndex)
      setCurrentIndex(newIndex)
    },
  }

  const settingsSingle = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex ,
    pauseOnHover: true,
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(5)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="mx-auto w-[70%]">
      <Slider ref={sliderUp} {...settingsMultiple}>
        {reviewsArray.map((review, i) => (
          <div key={review.id} className="text-center">
            <img
              src={review.image}
              height={i === currentIndex ? 140 : 100}
              width={i === currentIndex ? 140 : 100}
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
