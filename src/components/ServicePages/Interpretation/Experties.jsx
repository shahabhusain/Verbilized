import React from 'react'
import trusted from '../../../assets/exp.png'
import { Link } from 'react-router-dom'
const Expertise = () => {
  return (
    <div className=' flex flex-col md:flex-row  justify-between md:w-[80%] px-4 md:px-0 mx-auto md:mt-32 mt-20'>
        <div className=' flex flex-col gap-4 md:w-1/2'>
            <h1 className=' text-[32px] font-[600] text-white max-w-[444px]'>Our Expertise & Expert Approach</h1>
            <p className=' text-[#969696] text-[16px] font-[500]'>Looking for reliable interpretation services that make every word count? We provide professional solutions to help you communicate clearly and confidently, no matter the language. From consecutive video interpretation and over-the-phone support to high-quality simultaneous interpretation, our services are designed to fit your needs.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>Available on demand, we connect you with expert interpreters in virtually every language across the world. Whether it’s a legal case, a medical consultation, or a community event, our specialists ensure accuracy, confidentiality, and cultural sensitivity every step of the way.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>Ready to make your message heard worldwide?</p>
            <Link to="/services/getaquote" className=' text-[14px] font-[600] text-white bg-[#873AA7] py-2 px-5 rounded-full w-fit'>Get a Quote</Link>
        </div>
    <div className='md:w-[50%] md:relative'>
            <div className=' md:block hidden w-full  h-full bg-[#55035D] blur-2xl rounded-full'>
            </div>
            <img className=' md:absolute md:top-[-102px]' src={trusted} alt="" />
        </div>
    </div>
  )
}

export default Expertise