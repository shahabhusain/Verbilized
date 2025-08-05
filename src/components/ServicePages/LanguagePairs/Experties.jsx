import React from 'react'
import trusted from '../../../assets/exp.png'
const Expertise = () => {
  return (
    <div className=' flex  justify-between w-[80%] mx-auto mt-32'>
        <div className=' flex flex-col gap-4 w-1/2'>
            <h1 className=' text-[32px] font-[600] text-white max-w-[444px]'>Our Expertise & Expert Approach</h1>
            <p className=' text-[#969696] text-[16px] font-[500]'>eTranslation Services stands for Global Interpretation Services. We have earned our reputation as an international interpretation agency with a global reach. With interpreters in over 100 countries and expertise in over 200 languages, we provide the language proficiency you need, no matter where you are.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>Our comprehensive services cover in-person interpretation, over-the-phone interpretation, video interpretation, and American Sign Language (ASL) interpretation, each designed to offer seamless communication in any setting.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>Our team understands the nuances of non-verbal communication and cultural contexts, ensuring that the message is not only interpreted but also conveyed with the right tone and intent. By working closely with our clients, we guarantee that your in-person interpretation needs are met with precision, professionalism, and reliability. Discover the benefits of eTranslation Services’ simplified translation pricing.</p>
        </div>
    <div className='w-[50%] relative'>
            <div className=' w-full  h-full bg-[#55035D] blur-2xl rounded-full'>
            </div>
            <img className=' absolute top-[-12px]' src={trusted} alt="" />
        </div>
    </div>
  )
}

export default Expertise