import React from 'react'
import main from '../assets/main.png'
import bg1 from '../assets/back.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div id="Home" className=' flex items-center justify-between' style={{backgroundImage:`url(${bg1})`, backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className=' w-1/2 ml-32 flex flex-col gap-5 mx-12'>
            <h1 className=' text-[54px] font-semibold text-white max-w-[435px]'>Language Services Portfolio</h1>
            <p className='text-[#F4F4F4] text-[14px] font-[500] max-w-[455px]'>Explore the professional language services I offer in Pashto, Urdu, and English.</p>
            <Link to="/services/getaquote"  className=' w-fit text-[14px] font-semibold text-white border-[1px] border-white rounded-full py-2 px-5'>Get a Quote</Link>
        </div>
        <img className='w-[705px] h-[956px]' src={main} alt="" />
    </div>
  )
}

export default Hero