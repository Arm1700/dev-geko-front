import Slider from 'react-slick'
import aboutcard1info from '../../../entities/aboutcard1info'
import aboutcard2info from '../../../entities/aboutcard2info'
import AboutCard1 from '../shared/about/AboutCard1'
import AboutCard2 from '../shared/about/AboutCard2'
import {BiSolidQuoteLeft} from 'react-icons/bi'
import reviewsArray from "../../../entities/reviewsArray";

export default function AboutUs() {

    return (
        <main className="flex flex-col items-center overflow-x-hidden">
            <section>
                <div className="px-5 max-w-[1200px] mx-[auto]">

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
                    <div
                        className="grid mid:grid-cols-4 grid-cols-1 gap-[15px] items-center justify-items-center py-20">
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
                className="my-16 gap-8 px-5 w-[100%] mid:w-[70%] sm:w-[100%] flex items-start mid:justify-center">
                <BiSolidQuoteLeft className="w-[40px] h-[40px]  text-primary"/>
                <p className=" py-2 font-roboto-slab font-normal flex flex-col mid:w-[70%] w-[100%]   text-2xl text-primaryDark">
                    Cras tristique turpis justo, eu consequat sem adipiscing ut. Donec posuere bibendum metus.
                    <span className="text-sm pt-5 font-sans text-color60">
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
            <div className="slider-container py-20 w-[100vw]">
                <div className="max-w-[1200px] mx-[auto]  px-5">
                    <Slider
                        slidesToShow={5}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        centerMode={true}
                        initialSlide={0}
                        centerPadding={"0"}
                        variableWidth={false}
                        responsive={[
                            {
                                breakpoint: 1020,
                                settings: {
                                    slidesToShow: 3,
                                    initialSlide: 3,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    initialSlide: 1,
                                },
                            }
                        ]}
                    >
                        {reviewsArray.map((review, i) => (
                            <div key={review.id} className="text-center ">
                                <img
                                    src={review.image}
                                    className={`rounded-full mx-auto p-2 border-color86 sm:max-w-[170px] max-w-[140px]`}
                                    style={{
                                        border: "2px rgba(0, 0, 0, 0.5)",
                                        borderStyle: "dotted",
                                        // maxWidth: "165px",
                                        aspectRatio: "1 / 1",
                                    }}
                                    alt={'user ' + review.name}
                                />
                                <p className="text-primaryDark font-bold mt-5">{review.name}</p>
                                <p className="text-custom-15 text-color60 mt-5">{review.desc}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </main>
    )
}
