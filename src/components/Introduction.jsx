import React from 'react'
import intro from '../assets/intro.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
const Introduction = () => {
  return (
    <div id="Introduction" className=' flex  md:flex-row flex-col justify-between md:w-[80%] px-4 mx-auto m:mt-32 mt-12'>
        <div className='md:w-[45%] md:relative'>
            <div className=' w-full md:block hidden  h-full bg-[#55035D] blur-2xl rounded-full'>
            </div>
            <img className=' md:absolute md:top-6 top-0' src={intro} alt="" />
        </div>
        <div className=' md:w-1/2 flex flex-col gap-4 md:mt-12 mt-[12px]'>
            <p className=' text-[16px] font-[500] text-white'>With a diverse network of language professionals, Verbalizers provides multilingual solutions in over 100 languages—ensuring clarity, connection, and client satisfaction.</p>
            <p className=' text-[16px] font-[500] text-white'>Guided by our core values of accuracy, cultural sensitivity, and reliability, we ensure your message is communicated with clarity and impact. Our mission is to help you connect with audiences anywhere in the world, in any language, without losing meaning or authenticity.
</p>
            <p className=' text-[16px] font-[500] text-white'>We uphold the strictest standards of confidentiality, ensuring every project is handled with absolute discretion and security.</p>
        </div>
    </div>
  )
}

export default Introduction