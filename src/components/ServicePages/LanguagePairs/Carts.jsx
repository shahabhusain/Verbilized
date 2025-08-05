import React from 'react'
import icon1 from '../../../assets/imgg.png'
import icon2 from '../../../assets/imgg1.png'
const Carts = () => {
  return (
    <div className='relative w-[80%] mx-auto mt-60'>
            <div className=' w-full  h-[200px] bg-[#56035d53] blur-2xl rounded-full'>
            </div>
    <div className=' flex items-center gap-6 absolute top-0 w-full'>
                <div className=' flex flex-col w-1/2 gap-4 items-center border-[#ffffff20] border-[1px] p-12 rounded-lg '>
            <img src={icon1} alt="" />
            <h1 className=' text-white text-[26px] font-[600]'>Video Interpretation</h1>
        </div>
         <div className=' flex flex-col w-1/2 gap-4 items-center border-[#ffffff20] border-[1px] p-12 rounded-lg '>
            <img src={icon2} alt="" />
            <h1 className=' text-white text-[26px] font-[600]'>Over the Phone Interpretation</h1>
        </div>
    </div>
    </div>
  )
}

export default Carts