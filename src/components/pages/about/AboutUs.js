import aboutcard2info from '../../../entities/aboutcard2info'
import AboutCard2 from '../shared/about/AboutCard2'
import {BiSolidQuoteLeft} from 'react-icons/bi'
import {useTranslation} from 'react-i18next';

import img from '../../../images/mer masin.jpg'
import React, {
    useEffect,
    // useState
} from "react";
import Course from "../shared/home/Course";
import tutorsArray from "../../../entities/tutorsArray";
import reviewsArray from "../../../entities/reviewsArray";
import Review from "../shared/home/Review";

export default function AboutUs() {
    const {t, i18n} = useTranslation();
    const language = i18n.language;
    // const [reviewsArray, setReviewsArray] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:8000/api/reviews/?language=${language}`);
                const response = await fetch(`https://dev.gekoeducation.com/api/reviews/?language=${language}`);
                const data = await response.json();
                console.log(data);
                // setReviewsArray(data); // Сохранение курсов в состояние
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [language]);

    return (
        <main className="flex flex-col items-center overflow-x-hidden">
            <section>
                <div className="px-5 max-w-[1200px] mx-[auto] flex flex-col gap-[10px]">
                    <h1 className="text-3xl py-4 font-roboto-slab font-bold text-primaryDark">
                        {t('ABOUT_US')}
                    </h1>
                    <div className='w-full flex justify-center'>
                        <img src={img} className='w-1/2' alt=""/>
                    </div>
                    <div className="py-2">
                        <p className="text-md text-primaryDark text-justify">
                            {t('learn_with_passion_desc')}
                        </p>
                    </div>
                </div>
                <Course/>
            </section>
            <section className="text-center bg-primaryLight w-full px-5 ">
                <div className="max-w-[1200px] mx-[auto]">
                    <div className="pt-5">
                        <h1 className="text-3xl py-2 font-roboto-slab font-bold text-primaryDark">
                            {t('What_Make_Us_Spcecial')}
                        </h1>
                        {/*<p className="text-md text-secondaryLight">*/}
                        {/*    Lorem ipsum dolor sit amet, consectetur adipisc ing elit.*/}
                        {/*</p>*/}
                    </div>
                    <div className="grid mid:grid-cols-3 grid-cols-1 grid-rows-1 items-start gap-[15px] my-10 ">
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
                    {t('team')}
                </h1>
                <p className="text-md text-secondaryLight">
                    Plugins your themes with even more features.
                </p>
            </div>
            <div className="text-start lg:px-20 px-5 pt-5">
                <Review  reviewsArray={reviewsArray}/>
            </div>
        </main>
    )
}
