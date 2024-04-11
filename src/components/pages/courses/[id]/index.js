import React from 'react'
import { useParams } from 'react-router-dom'
import { TbClockHour9 } from 'react-icons/tb'
import { IoLanguage } from 'react-icons/io5'
import { IoPricetag } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { MdAssessment } from "react-icons/md";
import popularCoursesArray from '../../../../entities/popularCoursesArray';

export default function CoursePage() {
  const { id: course } = useParams()

  const {
    outcomed,
    image,
    title,
    price,
    features,
    desc,
    certification,
  } = popularCoursesArray?.find(el => el.id === +course)
  return (
    <section className="flex lg:px-20 px-5 py-5 flex-col items-start">
      <article className="my-5  flex flex-wrap lg:mx-1 mx-5   border-gray">
        <img src={image} alt={title} />

        <div className="flex flex-col justify-start  items-start px-5">
          <h1 className="text-xl pb-3 font-roboto-slab font-bold text-primeryDark">
            Course Features
          </h1>
          <div className="flex  items-center gap-3">
            <TbClockHour9 className="text-primary" />
            Duration {features.duration} 
          </div>
          <div className="flex  items-center gap-3">
            <IoLanguage className="text-primary" />
            Language {features.lang}
          </div>
          <div className="flex  items-center gap-3">
            <IoPricetag className="text-primary" />
            Price {price}
          </div>
          <div className="flex  items-center gap-3">
            <PiStudentBold className="text-primary" />
            Students {features.students}
          </div>
          <div className="flex  items-center gap-3">
            <MdAssessment  className="text-primary" />
            Assessments {features.assessments}
          </div>
        </div>
      </article>

      <h2 className="text-3xl w-full font-roboto-slab font-bold py-5 border-b text-primeryDark">
        Overview
      </h2>
      <div className="text-start lg:px-20 px-5 pt-5 ">
        <h1 className="text-xl font-roboto-slab font-bold text-primeryDark">
          COURSE DESCRIPTION
        </h1>
        <p className="text-md text-secondaryLight">{desc}</p>
      </div>

      <div className="text-start lg:px-20 px-5 pt-5 ">
        <h1 className="text-xl font-roboto-slab font-bold text-primeryDark">
          CERTIFICATION
        </h1>
        <p className="text-md text-secondaryLight">{certification}</p>
      </div>

      <div className="text-start lg:px-20 px-5 pt-5 ">
        <h1 className="text-xl font-roboto-slab font-bold text-primeryDark">
          LEARNING OUTCOMES
        </h1>
        <ul className="list-none text-primary">
          {outcomed?.map((el, i) => {
            return (
              <li
                key={i}
                className="text-md  flex items-center text-secondaryLight"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {el}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
