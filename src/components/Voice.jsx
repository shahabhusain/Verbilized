import React from 'react'
import voice from '../assets/voice.png'
const Voice = () => {
  return (
    <div id='Demo' className=' flex flex-col items-center justify-between mt-32'>
        <h1 className=' text-[32px] font-semibold text-white text-center'>Hear the Voice</h1>
        <p className=' text-[#969696] text-[14px] font-[500] text-center max-w-[555px]'>Got questions? We’ve answered some of the most common ones to help you understand how we work, what we offer, and how we can support your business.</p>
        <img className=' max-w-[1200px] h-[777px]' src={voice} alt="" />
    </div>
  )
}

export default Voice