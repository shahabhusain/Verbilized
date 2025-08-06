import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ServiceHeader = () => {
  return (
     <div className=' sticky top-0 z-[1000] backdrop-blur-2xl'>
         <div className="relative py-3 ">
      {/* Background layer with opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-violet-900 opacity-[0.5] z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-between w-[80%] mx-auto">
        <Link to='/'> <button className=" cursor-pointer text-[24px] font-bold text-white">Sundus</button></Link>
        <Link to="/services/getaquote" className="bg-[#873AA7] cursor-pointer py-2 px-5 rounded-full text-white text-[14px] font-[600]">
          Get a Quote
        </Link>
      </div>
    </div>
     </div>
  )
}

export default ServiceHeader
