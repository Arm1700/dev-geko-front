import React from 'react'
import { MdOutlinePlace } from 'react-icons/md'
import { TbClockHour3 } from 'react-icons/tb'

export default function Event({
  day,
  month,
  title,
  hour,
  place,
  description,
  image,
}) {
  return (
    <section className="events-container border-b-2  py-[30px] border-gray-300 flex  gap-5   md:justify-between md:items-center">
      <div className="events-position-month flex flex-col gap-1">
        <span className="text-primary font-bold text-6xl leading-60">
          {day}
        </span>
        <span className="text-gray leading-[25px]">{month}</span>
      </div>
      <div className="events-info gap-2 flex flex-col">
        <h5 className="text-2xl font-bold hover:text-primary transition-colors duration-300 cursor-pointer ">{title}</h5>
        <div className="flex gap-1 items-center">
          <TbClockHour3 className="text-primary" /> <span>{hour}</span>
          <MdOutlinePlace className="text-primary" /> <span>{place}</span>
        </div>
        <p>{description}</p>
      </div>
      <img alt={"image " + description} src={image} className="rounded-md events-container-img" />
    </section>
  )
}
