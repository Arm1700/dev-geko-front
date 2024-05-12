import React from 'react'
import {MdOutlinePlace} from 'react-icons/md'
import {TbClockHour3} from 'react-icons/tb'

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
        <section
            className=" border-b-2  py-[30px] border-gray-300 flex  gap-5   md:justify-between md:items-center md:flex-row max:flex-col max:relative">
            <div
                className="flex flex-col gap-1 md:static max:w-[100px] max:bg-white max:text-center max:absolute max:top-[10%] max:left-[3%]">
        <span className="text-primary font-bold text-6xl leading-60">
          {day}
        </span>
                <span className="text-gray leading-[25px]">{month}</span>
            </div>
            <div className="gap-2 flex flex-col md:order-none max:order-1">
                <h5 className="text-2xl font-bold hover:text-primary transition-colors duration-300 cursor-pointer ">{title}</h5>
                <div className="flex gap-1 items-center">
                    <TbClockHour3 className="text-primary"/> <span>{hour}</span>
                    <MdOutlinePlace className="text-primary"/> <span>{place}</span>
                </div>
                <p>{description}</p>
            </div>
            <img alt={"image " + description} src={image} className="rounded-md md:w-[auto] max:w-[100%]"/>
        </section>
    )
}
