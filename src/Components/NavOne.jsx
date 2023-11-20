import React from 'react'
import { Link, NavLink} from 'react-router-dom'
const NavOne = () => {
  return (
    <>
        <nav className='w-100 p-5 flex justify-between bg-indigo-400 border-b-4 border-b-black'>
            <div className="layoutone text-4xl font-bold text-black">
                    <Link to='/'>LAYOUT ONE</Link>
            </div>
            <ul className='flex gap-5'>
                <li> <NavLink to="/" className={({isActive})=>isActive? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-white' }>Home</NavLink> </li>
                <li> <NavLink to="/Contract" className={({isActive})=>isActive? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-white' }>Contrat</NavLink> </li>
                <li> <NavLink to="/Blog" className={({isActive})=>isActive? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-white' }>Blog</NavLink> </li>
                <li> <NavLink to="/LayoutTwo" className={({isActive})=>isActive? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-white' }>Secend layout</NavLink> </li>
            </ul>
        </nav>
    </>
  )
}

export default NavOne