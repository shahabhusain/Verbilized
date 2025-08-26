import React from 'react'
import trusted from '../../../assets/every.png'
const EveryVoice = () => {
  return (
    <div className=' flex flex-col md:flex-row  justify-between md:w-[80%] px-4 mx-auto md:mt-40 mt-20'>
          <div className='md:w-[45%] md:relative'>
            <div className=' w-full md:block hidden  h-full bg-[#55035D] blur-2xl rounded-full'>
            </div>
            <img className=' md:absolute md:top-[-50px] top-0 mt-5 md:mt-0' src={trusted} alt="" />
        </div>
        <div className=' flex flex-col gap-4 md:w-1/2'>
            <h1 className=' text-[32px] font-[600] text-white max-w-[444px]'>Your Message, In Every Voice.</h1>
            <p className=' text-[#969696] text-[16px] font-[500]'>A voice is more than sound—it’s emotion, personality, and trust. Across every language and culture, tone and delivery can shape meaning just as much as the words themselves. The same sentence can feel warm and inviting in one style, or authoritative and formal in another. That’s why understanding your audience is essential. Whether you need a confident narrator for a corporate video, a gentle storyteller for an audiobook, or a lively character voice for animation, we shape every performance to feel natural, relatable, and true to the people you want to connect with—so your message isn’t just heard, it’s felt.</p>
        </div>
  
    </div>
  )
}

export default EveryVoice