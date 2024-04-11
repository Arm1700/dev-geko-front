import React from 'react';
import Logo from '../pages/shared/Logo';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePlace } from 'react-icons/md';
import { MdMarkEmailRead } from 'react-icons/md';
import { routesArray } from '../../entities/routesArray';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import socialsArray from '../../entities/socialsArray';

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className="flex flex-row items-center justify-between lg:px-20 px-5 bg-secondary lg:px-20 px-5 text-pseudo p-5">
      <div className="flex flex-col gap-4">
        <Logo />
        <p className="flex">
          <FaPhoneAlt className="mx-2 text-primary" />
          +374 898989889
        </p>
        <p className="flex">
          <MdOutlinePlace className="mx-2 text-primary" />
          London,UK
        </p>
        <p className="flex">
          <MdMarkEmailRead className="mx-2 text-primary" />
          sadasd@aasd.sda
        </p>
      </div>
      <ul className='flex content-start flex-wrap gap-3'>
       {routesArray.map(({path,name,id})=>{
        return(
          <li className='' key={id}>
            <Link to={path}>
              {t(name)}
            </Link>
          </li>
        )
       })}
      </ul>
      <ul className='flex gap-3  justify-between'>
     {
      socialsArray.map(({id,name,Icon})=>{
        return(
          <Icon title={name} key={id} className='text-primary text-3xl'/>
        )
      })
     }
      </ul>
    </footer>
  );
};

export default Footer;
