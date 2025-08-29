import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';
const ServiceHeader = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
     <div className=' sticky top-0 z-[1000] backdrop-blur-2xl'>
         <div className="relative py-3 ">
      {/* Background layer with opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-violet-900 opacity-[0.5] z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-between md:w-[80%] px-4 md:px-0 mx-auto">
        <Link to='/'> <button className=" cursor-pointer text-[24px] font-bold text-white">Verbalizers</button></Link>
        <div className=' md:flex hidden items-center gap-12'>
          <Link className='text-[14px] font-[400] hover:border-b-[1px] hover:border-b-[#fff] text-white cursor-pointer pb-2 ' to="/services">Translational</Link>
          <Link className='text-[14px] font-[400] hover:border-b-[1px] hover:border-b-[#fff] text-white cursor-pointer pb-2 ' to="/services/interpretation">Interpretation</Link>
          <Link className='text-[14px] font-[400] hover:border-b-[1px] hover:border-b-[#fff] text-white cursor-pointer pb-2 ' to="/services/voiceover">Voiceover</Link>
          <Link className='text-[14px] font-[400] hover:border-b-[1px] hover:border-b-[#fff] text-white cursor-pointer pb-2 ' to="/services/localize">Localization</Link>
        </div>
        <Link to="/services/getaquote" className="bg-[#873AA7] md:block hidden cursor-pointer py-2 px-5 rounded-full text-white text-[14px] font-[600]">
          Get a Quote
        </Link>
         <button className=' text-white md:hidden block' onClick={handleOpen}>{open ? <X />   : <MenuIcon />}</button>

           <div className={`fixed bg-white  top-0 left-0 z-40 w-[80%] h-screen transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                     <div className=' flex flex-col items-center mt-32 justify-center gap-y-4  md:hidden gap-5'>
          <Link onClick={()=>setOpen(!open)} className='text-[24px] font-[400] text-black cursor-pointer pb-2 ' to="/services">Translational</Link>
          <Link onClick={()=>setOpen(!open)} className='text-[24px] font-[400] text-black cursor-pointer pb-2 ' to="/services/interpretation">Interpretation</Link>
          <Link onClick={()=>setOpen(!open)} className='text-[24px] font-[400] text-black cursor-pointer pb-2 ' to="/services/voiceover">Voiceover</Link>
          <Link onClick={()=>setOpen(!open)} className='text-[24px] font-[400] text-black cursor-pointer pb-2 ' to="/services/localize">Localization</Link>
                  <Link to="/services/getaquote" className="bg-[#873AA7] text-center  block md:hidden cursor-pointer py-2 px-5 rounded-full text-white text-[14px] font-[600]">
          Get a Quote
        </Link>
        </div>

           </div>
      </div>
    </div>
     </div>
  )
}

export default ServiceHeader
