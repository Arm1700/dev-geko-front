import {useLayoutEffect, useState} from 'react'
import Slider from 'react-slick'
import aboutcard1info from '../../../entities/aboutcard1info'
import aboutcard2info from '../../../entities/aboutcard2info'
import AboutCard1 from '../shared/about/AboutCard1'
import AboutCard2 from '../shared/about/AboutCard2'
import {BiSolidQuoteLeft} from 'react-icons/bi'
import tutorsArray from '../../../entities/tutorsArray'
import Tutors from '../shared/about/Tutors'

export default function AboutUs() {
    const [reviewsToShow, setReviewsToShow] = useState(3)

    useLayoutEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth
            if (screenWidth >= 1200) {
                setReviewsToShow(5)
            } else if (screenWidth >= 768) {
                setReviewsToShow(4)
            } else if (screenWidth >= 576) {
            } else if (screenWidth >= 450) {
                setReviewsToShow(3)
            } else {
                setReviewsToShow(2)
            }
        }

        updateSlidesToShow()
        window.addEventListener('resize', updateSlidesToShow)
        return () => {
            window.removeEventListener('resize', updateSlidesToShow)
        }
    }, [])
    const settingsForReviews = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: reviewsToShow,
        speed: 500,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
    }

    return (
        <main className="flex flex-col items-center">
            <section >
                <div className=" px-5 max-w-[1200px] mx-[auto]">

                <h1 className="text-3xl py-4 font-roboto-slab font-bold text-primaryDark">
                    About Us
                </h1>
                <div className="text-center py-2 ">
                    <h1 className="text-3xl py-2 font-roboto-slab font-bold text-primaryDark">
                        Learn with passion to live with purpose.
                    </h1>
                    <p className="text-md text-secondaryLight">
                        Neque convallis a cras semper auctor. Libero id faucibus nisl
                        tincidunt egetnvallis a cras semper auctonvallis a cras semper
                        aucto.{' '}
                    </p>
                </div>
                <div className="grid mid:grid-cols-4 grid-cols-1 gap-[15px] items-center justify-items-center py-20">
                    {aboutcard1info.map(({id, count, color, space, title, Icon}) => {
                        return (
                            <AboutCard1
                                key={id}
                                count={count}
                                color={color}
                                space={space}
                                title={title}
                                Icon={Icon}
                            />
                        )
                    })}
                </div>
                </div>
            </section>

            <section className="text-center bg-primaryLight w-full px-5 ">
                <div className="max-w-[1200px] mx-[auto]">
                    <div className="pt-5">
                        <h1 className="text-3xl py-2 font-roboto-slab font-bold text-primaryDark">
                            What Make Us Spcecial?
                        </h1>
                        <p className="text-md text-secondaryLight">
                            Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
                        </p>
                    </div>
                    <div className="grid mid:grid-cols-3 grid-cols-1 gap-[15px] my-10 ">
                        {aboutcard2info.map(({id, desc, title, image}) => {
                            return (
                                <AboutCard2 key={id} title={title} desc={desc} image={image}/>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section
                className="lg:px-20 my-16 gap-8 px-5 w-[70%] mid:w-[85%] sm:w-[80%] max:w-[90%]   flex items-start justify-center">
                <BiSolidQuoteLeft className="text-[40px]  text-primary"/>
                <p className=" py-2 font-roboto-slab font-normal flex flex-col text-2xl text-primaryDark">
                    Cras tristique turpis justo, eu consequat sem adipiscing ut. Donec{' '}
                    <br/>
                    posuere bibendum metus.
                    <span className="text-sm pt-5 font-sans text-gray">
            Tony Nguyen, Co-Founder
          </span>
                </p>
            </section>
            <div className="text-center lg:px-20 px-5 py-2 ">
                <h1 className="text-3xl py-2 font-roboto-slab font-bold text-primaryDark">
                    Meet Our Team
                </h1>
                <p className="text-md text-secondaryLight">
                    Plugins your themes with even more features.
                </p>
            </div>
            <div className="slider-container py-20 w-[100vw] lg:px-20 px-5  ">
                {/*<Slider {...settingsForReviews}>*/}
                {/*    {tutorsArray.map(({id, image, name, role}) => {*/}
                {/*        return <Tutors key={id} image={image} name={name} role={role}/>*/}
                {/*    })}*/}
                {/*</Slider>*/}
            </div>
        </main>
    )
}
