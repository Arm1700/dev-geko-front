import React from 'react'
import {MdOutlinePlace} from 'react-icons/md'
import {TbClockHour3} from 'react-icons/tb'

export default function Event({
                                  day, month, title, hour, place, description, image,
                              }) {
    return (<section
        className=" border-b-2  py-[30px] border-gray-300 flex  gap-5   sm:justify-between sm:items-center sm:flex-row max:flex-col max:relative">
        <div
            className="flex flex-col gap-1 sm:static w-[200px] max:w-[100px] max:bg-white max:text-center max:absolute max:top-[10%] max:left-[3%]">
        <span className="text-primary font-bold text-6xl leading-60">
          {day}
        </span>
            <span className="text-color60 leading-[25px] font-sans-serif">{month}</span>
        </div>
        <div className="gap-2 flex flex-col sm:order-none max:order-1 "
             style={{
                 maxWidth: "550px"
             }}>
            <h5 className="text-lg font-bold hover:text-primary transition-colors duration-300 cursor-pointer ">{title}</h5>
            <div className="flex gap-1 items-center">
                <TbClockHour3 className="text-primary w-[21px]"/> <span className="text-sm">{hour}</span>
                <MdOutlinePlace className="text-primary "/> <span className="text-sm">{place}</span>
            </div>
            <p className="text-color60 text-custom-15">{description}</p>
        </div>
        <img alt={"image " + description} src={image}
             className="rounded-md md:w-[270px] sm:w-[270px] max:w-[100%]"/>
    </section>)
}
