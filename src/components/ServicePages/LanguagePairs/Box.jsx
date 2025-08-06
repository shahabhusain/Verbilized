import React from 'react'
import icon1 from '../../../assets/imgg2.png'
import icon2 from '../../../assets/imgg3.png'
import icon3 from '../../../assets/imgg4.png'
const Carts = () => {
  return (
    <div className='relative w-[80%] mx-auto mt-60'>
            <div className=' w-full  h-[200px] bg-[#56035d53] blur-2xl rounded-full'>
            </div>
    <div className=' flex items-center gap-6 absolute top-0 w-full'>
                <div className=' flex w-1/2 gap-2 items-center border-[#ffffff20] border-[1px] p-12 rounded-lg '>
            <img src={icon1} alt="" />
            <h1 className=' text-white text-[26px] font-[600]'>What the service is</h1>
        </div>
         <div className=' flex w-1/2 gap-2 items-center border-[#ffffff20] border-[1px] p-12 rounded-lg '>
            <img src={icon2} alt="" />
            <h1 className=' text-white text-[26px] font-[600]'>Who it’s for</h1>
        </div>

        <div className=' flex w-1/2 gap-2 items-center border-[#ffffff20] border-[1px] p-12 rounded-lg '>
            <img src={icon3} alt="" />
            <h1 className=' text-white text-[26px] font-[600]'>Why it matters</h1>
        </div>
    </div>
    </div>
  )
}

export default Carts