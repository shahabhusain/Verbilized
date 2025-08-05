import React from 'react'
import circle from '../../../assets/circle.png'
const Translation = () => {
  return (
    <div className='bg-[#030406] py-24'>
        <div className=' flex items-center w-[80%] mx-auto justify-between'>
      <div className=' flex flex-col gap-3 w-1/2'>
        <h1 className=' text-[54px] font-[600] text-white'>Translation Services</h1>
        <p className=' text-[14px] font-[500] text-white'>Professional human translation services for websites, documents, and digital content — in 30+ languages.</p>
        <button className=' mt-5 text-white font-medium border-[1px] border-[#fff] rounded-full py-2 px-5 w-fit'>Get a Quote</button>
      </div>
      <div className=' w-[40%] relative'>
                  <div className=' w-[100%]  h-[500px] bg-[#56035d48] blur-2xl rounded-full'>
                 </div>
           <img className=' absolute top-0' src={circle} alt="" />
               </div>
    </div>
    </div>
  )
}

export default Translation