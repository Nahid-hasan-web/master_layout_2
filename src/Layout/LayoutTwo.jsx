import React from 'react'
import NavTwo from '../Components/NavTwo'
import { Outlet } from 'react-router-dom'

const LayoutTwo = () => {
  return (
    <>
        <NavTwo/>
        
        <Outlet/>
    </>
  )
}

export default LayoutTwo