import React from 'react'
import {MdOutlinePlace} from 'react-icons/md'
import {TbClockHour3} from 'react-icons/tb'
import {useNavigate} from "react-router-dom";

export default function Event({
                                  id, day, month, title, hour, place, description, image,
                              }) {

    const nav = useNavigate();
    const handleCategoryClick = (id) => {
        nav(`/events/${id}`);
    };
    return (<section
        className=" border-t-[1px] border-colorF2 py-[30px] flex gap-5 sm:justify-between sm:items-center sm:flex-row max:flex-col max:relative">
        <div
            className="flex flex-col gap-1 sm:static w-[200px] max:w-[100px] md:mr-10 mr-0 max:bg-white max:text-center max:absolute max:top-[10%] max:left-[3%]">
        <span className="text-color56 font-bold text-6xl leading-60">
          {day}
        </span>
            <span className="text-color60 leading-[25px] font-sans-serif">{month}</span>
        </div>
        <div className="gap-2 flex middle:px-5 md:px-20 px-0 flex-col sm:order-none max:order-1 "
             style={{
                 maxWidth: "700px"
             }}>
            <h5 className="text-lg font-bold hover:text-color56 transition-colors duration-300 cursor-pointer "
                onClick={() => handleCategoryClick(id)}
            >{title}</h5>
            <div className="flex gap-1 items-center">
                <TbClockHour3 className="text-color99 w-[21px]"/> <span className="text-sm text-color99">{hour}</span>
                <MdOutlinePlace className="text-color99 "/> <span className="text-sm text-color99">{place}</span>
            </div>
            <p className="text-color60 text-custom-15">{description}</p>
        </div>
        <img alt={"image " + description} src={image}
             className="rounded-md md:w-[270px] sm:w-[270px] max:w-[100%]"/>
    </section>)
}
