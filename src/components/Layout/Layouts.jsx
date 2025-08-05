import React from 'react'
import { Outlet } from 'react-router-dom'
import ServiceHeader from './ServiceHeader'
import Footer from './Footer'

const Layouts = () => {
  return (
    <div>
        <ServiceHeader />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layouts