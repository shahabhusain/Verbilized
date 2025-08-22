import React from 'react'
import circle from '../../assets/quote.png'
const Hero = () => {
  return (
    <div className='bg-[#030406] py-24'>
        <div className=' flex items-center md:w-[80%] px-4 md:px-0 mx-auto justify-between'>
      <div className=' flex flex-col gap-3 md:w-1/2'>
        <h1 className=' md:text-[54px] text-[34px] font-[600] text-white'>Quote</h1>
        <p className=' text-[14px] font-[500] text-white'>Get a personalized quote based on your project details  quick, easy, and commitment-free.</p>
      </div>
          <div className=' w-[40%] relative'>
             <div className=' md:block hidden w-[100%]  h-[500px] bg-[#56035d48] blur-2xl rounded-full'>
            </div>
      <img className=' md:block hidden absolute top-0' src={circle} alt="" />
          </div>
    </div>
    </div>
  )
}

export default Hero