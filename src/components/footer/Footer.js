import React from 'react';
import Logo from '../pages/shared/Logo';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdOutlinePlace} from 'react-icons/md';
import {MdMarkEmailRead} from 'react-icons/md';
import {routesArray} from '../../entities/routesArray';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import FacebookBox from "../pages/shared/home/FacebookBox";
import InstagramPost from "../pages/shared/home/InstagramPost";
import FacebookPageData from "../pages/shared/home/FacebookPageData";

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="flex bg-black text-pseudo h-[auto]">
            {/*<div*/}
            {/*    className="flex middle:flex-row flex-col middle:items-center justify-between px-5 py-20 mx-[auto] gap-5 max-w-[1300px]">*/}
            <div
                className="middle:grid middle:grid-cols-[1fr_10%_1fr_1fr]  grid-rows-[20%_1fr] justify-center px-5 py-20 mx-[auto] gap-5 max-w-[1300px]">
                <Logo/>
                <div className="flex flex-col gap-5 row-start-2">
                    <div className="flex">
                        <FaPhoneAlt className="mx-2 text-primary"/>
                        <p>(+374) 98 03 33 94</p>
                    </div>
                    <div className="flex">
                        <MdOutlinePlace className="mx-2 text-primary"/>
                        <p className=' w-[80%] middle:w-60%'>
                            {t("contact1_description")}
                        </p>
                    </div>
                    <div className="flex">
                        <MdMarkEmailRead className="mx-2 text-primary"/>
                        <p>
                            gekoeducation1@gmail.com
                        </p>
                    </div>
                </div>
                <ul className='flex flex-col items-center content-start flex-wrap gap-3 middle:order-none order-2 row-start-2'>
                    {routesArray.map(({path, name, id}) => {
                        return (
                            <li className='flex justify-start w-full font-bold' key={id}>
                                <Link to={path}>
                                    {t(name)}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className='column-start-3 row-span-2'>
                    <FacebookBox pageUrl="https://www.facebook.com/GekoOnlineEducation" />
                    {/*<FacebookPageData token='EAAMFlZBU1aocBO4BL2kRqzv5tjW9ZAKxYp1ny23Ip8lwIswHZBS6hrhlyKE7KmIglS4NxZBr1ZCglJAP7e8MdldmQZBOXIWt2MiJ6lc2BeXuwJ4dKz7JhZBefFAkalOeTrwdC0o8jniVZB2ZCO2MVWm2ViI9taXOaBHIZBHos4hvWEyPC7avHeYrC1338vyeZBK394KuZCvcl9XyZBubVkMjzLmPAykF2YTCOfyD9L6jNlKPmeGF5Til4Lzj0' pageId="GekoOnlineEducation" />*/}
                </div>
                {/*<div className='column-start-4 row-span-2'>*/}
                {/*    <InstagramPost />*/}
                {/*</div>*/}
            </div>
        </footer>
    );
};

export default Footer;
