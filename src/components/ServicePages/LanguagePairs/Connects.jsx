import React from 'react'
import trusted from '../../../assets/connect.png'
const Connects = () => {
  return (
    <div className=' flex items-center  justify-between w-[80%] mx-auto mt-32'>
        <div className=' flex flex-col gap-4 w-1/2'>
            <h1 className=' text-[32px] font-[600] text-white max-w-[444px]'>Connect the World with Over 200 Language Pairs</h1>
            <p className=' text-[#969696] text-[16px] font-[500]'>We make global communication seamless by offering translation and interpretation services in over 200 language pairs. Whether you're working with widely spoken languages like English, Spanish, and Mandarin, or need support for less common combinations, our expert linguists are ready to help.
Each project is matched with native-speaking professionals fluent in both the source and target languages—ensuring not just accurate translation, but culturally appropriate and context-aware results. From business documents to live interpretation, we support combinations like English–Arabic, French–German, Chinese–Spanish, and many more.
No matter the region or industry, we help you break language barriers and reach your audience with clarity and confidence.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>At our core, we believe that the right voice can make all the difference. Our professional voiceover services are designed to help you communicate with impact—whether you’re producing a commercial, explainer video, eLearning module, corporate narration, audiobook, or even IVR systems.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>We work with a diverse roster of native-speaking, highly trained voice talents who bring emotion, clarity, and credibility to every script. With multiple languages, tones, and delivery styles available, we match your project with the perfect voice that truly resonates with your audience.
From script to final audio delivery, we ensure studio-quality sound, fast turnaround times, and full support every step of the way. Let us help you create voiceovers that not only sound great but feel authentic and align perfectly with your brand’s message.</p>
        </div>
            <img className='w-[40%]' src={trusted} alt="" />
    </div>
  )
}

export default Connects