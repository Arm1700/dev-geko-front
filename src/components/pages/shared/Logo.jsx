import React from 'react'
import logo from '../../../images/logo.jpg'
import { Link } from 'react-router-dom'

export default function Logo({ size = '50px' }) {
  return (
    <Link to='/'>
       <div className="flex w-max items-center gap-2 justify-between">
      <img src={logo} width={size} alt="logo" />
      <span className='text-2xl font-mono font-bold '>GEKO</span>
    </div>
    </Link>
   
  )
}
