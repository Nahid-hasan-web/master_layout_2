import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTwo = () => {
  return (
    <>
        <div className="main flex justify-between p-5 bg-[#B6C9F0]">
            <div className="logo_col">
                <h1 className='text-3xl front-bold'> secend layout menu</h1>
            </div>
            <div className="main_menu ">
            <ul className='flex gap-5'>
                <li> <NavLink to="/" className={({isActive})=>isActive? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-white' }>Home</NavLink> </li>
                <li> <NavLink to="/LayoutTwo/API" className={({isActive})=>isActive? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-white' }>APIS</NavLink> </li>
                <li> <NavLink to="/LayoutTwo/Form" className={({isActive})=>isActive? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-white' }>Blog</NavLink> </li>
            </ul>
            </div>
        </div>
    </>
)
}

export default NavTwo