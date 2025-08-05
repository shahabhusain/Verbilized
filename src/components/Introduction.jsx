import React from 'react'
import intro from '../assets/intro.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
const Introduction = () => {
  return (
    <div id="Introduction" className=' flex  justify-between w-[80%] mx-auto mt-32'>
        <div className='w-[40%] relative'>
            <div className=' w-full  h-full bg-[#55035D] blur-2xl rounded-full'>
            </div>
            <img className=' absolute top-0' src={intro} alt="" />
        </div>
        <div className=' w-1/2 flex flex-col gap-4'>
            <h1 className=' text-[32px] font-[600] text-white'>Let Me Introduce Myself</h1>
            <p className=' text-[16px] font-[500] text-white'>Hi, I’m Sundus—a professional voiceover artist, certified interpreter, and experienced translator with a passion for clear, human communication. With over four years in the voiceover industry and two years as a full-time interpreter, I’ve worked with clients across healthcare, education, nonprofits, and media—bringing warmth, precision, and professionalism to every project.</p>
            <h1 className=' text-[20px] font-[600] text-white flex items-center gap-2'><img src={icon1} alt="" />My native language</h1>
            <p className=' text-[16px] font-[500] text-white'>My native language is Pashto, and I work fluently in Urdu and English. Whether I’m narrating a children’s story, translating culturally sensitive material, or interpreting a live conversation between a patient and provider—I focus on making sure the message is not just understood, but truly felt. My clients often describe my voice as friendly, clear, and trustworthy, and my work ethic as reliable, detail-oriented, and compassionate.</p>

             <h1 className=' text-[20px] font-[600] text-white flex items-center gap-2 mt-5'><img src={icon2} alt="" />Trained in medical interpretation</h1>
            <p className=' text-[16px] font-[500] text-white'>I’m also HIPAA certified and trained in medical interpretation, which allows me to work confidently with sensitive and confidential material. Over the years, I’ve voiced content for public health campaigns, translated for NGOs, interpreted injury-related calls, and worked on dubbing projects for educational platforms and YouTube channels.</p>
            <p className=' text-[16px] font-[500] text-white'>This site is where I share my services, showcase my voice, and connect with clients who want authentic multilingual communication. Thank you for being here—I look forward to working with you</p>
        </div>
    </div>
  )
}

export default Introduction