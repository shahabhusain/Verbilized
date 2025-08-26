import React from 'react'
import trusted from '../../../assets/trusted.png'
const Trusted = () => {
  return (
    <div className=' flex flex-col md:flex-row  justify-between md:w-[80%] px-4 mx-auto md:mt-32 mt-20'>
        <div className=' flex flex-col gap-4 md:w-1/2'>
            <h1 className=' text-[32px] font-[600] text-white max-w-[444px]'>Trusted Translation for Critical Documents</h1>
            <p className=' text-[#969696] text-[16px] font-[500]'>Words connect people—and just as important as what you say is how you say it. Every community, region, or demographic has its own unique terms, expressions, and rhythms that define its identity. That’s why understanding your audience matters. Even when speakers share a language, subtle differences in dialect, tone, or phrasing can make a big difference. we take the time to know your audience firsthand—so we can speak in their voice, as if it were our own.</p>
        </div>
    <div className='md:w-[45%] md:relative'>
            <div className=' w-full md:block hidden  h-full bg-[#55035D] blur-2xl rounded-full'>
            </div>
            <img className=' md:absolute md:top-[-50px] top-0 mt-5 md:mt-0' src={trusted} alt="" />
        </div>
    </div>
  )
}

export default Trusted