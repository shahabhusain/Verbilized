import React from 'react'
import circle from '../../../assets/circle.png'
import { Link } from 'react-router-dom'
const Translation = () => {
  return (
    <div className='bg-[#030406] py-6'>
        <div className=' flex items-center md:w-[80%] px-4 mx-auto justify-between'>
      <div className=' flex flex-col gap-3 md:w-1/2'>
        <h1 className=' text-[54px] font-[600] text-white'>Translation Services</h1>
        <p className=' text-[14px] font-[500] text-white'>We provide accurate and culturally nuanced translations in over 100 languages, ensuring your message is clearly understood across borders. From documents to digital content, we help you reach the right audience anywhere in the world.</p>
        <Link to="/services/getaquote"  className=' mt-5 text-white font-medium border-[1px] border-[#fff] rounded-full py-2 px-5 w-fit'>Get a Quote</Link>
      </div>
      <div className=' w-[40%] md:relative'>
                  <div className=' w-[100%] md:block hidden  h-[500px] bg-[#56035d48] blur-2xl rounded-full'>
                 </div>
           <img className=' md:block hidden md:absolute top-0' src={circle} alt="" />
               </div>
    </div>
    </div>
  )
}

export default Translation