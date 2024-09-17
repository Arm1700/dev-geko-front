import React, {useState} from 'react'
import {MdOutlinePlace} from 'react-icons/md'
import {TbClockHour3} from 'react-icons/tb'
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Event({
                                  id, day, month, title, hour, place, description, image,
                              }) {
    const nav = useNavigate();
    const handleCategoryClick = (id) => {
        nav(`/events/${id}`);
    };
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleMouseEnter = () => {
        setMenuVisible(true);
    };

    const handleMouseLeave = () => {
        setMenuVisible(false);
    };
  const { t } = useTranslation();

    return (<section

        className=" border-b-2 py-[30px] border-gray-300 flex gap-5 sm:justify-between sm:items-center sm:flex-row max:flex-col max:relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div
            className={`flex flex-col gap-1 sm:static w-[200px] max:w-[100px] md:mr-10 mr-0 max:bg-white max:text-center max:absolute max:top-[10%] max:left-[3%] ${isMenuVisible ? 'border-color56' : ''}`}>
        <span className="text-primary font-bold text-6xl leading-60">
          {day}
        </span>
            <span className="text-color60 leading-[25px] font-sans-serif">{t(month)}</span>
        </div>
        <div className="gap-2 flex middle:px-5 md:px-20 px-0 flex-col sm:order-none max:order-1 w-full"
             style={{
                 maxWidth: "700px"
             }}>
            <h5 className="text-lg font-bold hover:text-primary transition-colors duration-300 cursor-pointer "
                onClick={() => handleCategoryClick(id)}
            >{t(title)}</h5>
            <div className="flex gap-1 items-center">
                <TbClockHour3 className="text-primary w-[21px]"/> <span className="text-sm">{hour}</span>
                <MdOutlinePlace className="text-primary "/> <span className="text-sm">{t(place)}</span>
            </div>
            <p className="text-color60 text-custom-15 center">{t(description)}</p>
        </div>
        <img alt={"image " + t(description)} src={image[0]}
             className="rounded-md md:w-[270px] sm:w-[270px] max:w-[100%]"/>
    </section>)
}