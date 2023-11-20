import React from 'react'
import NavOne from '../Components/NavOne'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
   <>
    <NavOne/>
    
    <Outlet></Outlet>
   </>
  )
}

export default LayoutOne