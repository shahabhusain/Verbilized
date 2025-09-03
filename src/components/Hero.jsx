import React from 'react'
import main from '../assets/main.png'
import bg1 from '../assets/back.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div id="Home" className=' flex flex-col md:flex-row items-center justify-between' style={{backgroundImage:`url(${bg1})`, backgroundPosition:"center", backgroundSize:"cover"}}>
        <div className=' md:w-1/2 md:ml-32 flex flex-col gap-5 md:mx-12 mx-4 mt-12 md:mt-0'>
            <h1 className=' md:text-[54px] text-[44px] font-semibold text-white md:max-w-[535px]'>Breaking Barriers, Connecting Worlds</h1>
            <p className='text-[#F4F4F4] text-[14px] font-[500] md:max-w-[455px]'>At Verbalizers, we provide translation, localization, and tailored language solutions for clients of all sizes, including businesses, government organizations, and individuals. We bridge the gap between languages and cultures, ensuring your message resonates with the right audience in any language.</p>
            <Link to="/services/getaquote"  className=' w-fit text-[14px] font-semibold text-white border-[1px] border-white rounded-full py-2 px-5'>Get a Quote</Link>
        </div>
        <img className='md:w-[705px] md:h-[956px]' src={main} alt="" />
    </div>
  )
}

export default Hero