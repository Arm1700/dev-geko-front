import React from 'react'
import { useParams } from 'react-router-dom'
import Error404 from "../../Error";
import {coursesArray} from "../../../../../entities/coursesArray";

export default function CourseCategoryPage() {
  const { id: category } = useParams()
  console.log(category)
  const pickedCourse =
    coursesArray?.find(el => el.id === +category)
  return (
    <section className="flex lg:px-20 px-5 py-5 flex-col items-start">
      {pickedCourse?.id ? (
       <p>"hello"</p>
      ) : (
        <Error404 />
      )}
    </section>
  )
}
