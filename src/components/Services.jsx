import React from 'react'
import { Link } from 'react-router-dom'
import service from '../assets/service.png'
const Services = () => {
  return (
    <div id='Services' className=' flex  justify-between mt-32  w-[80%] mx-auto'>
       <div className=' w-1/2 relative'>
                   <div className=' w-[500px]  h-[500px] bg-[#56035d9f] blur-[120px] rounded-full'>
            </div>
           <div className='flex flex-col gap-3 absolute top-0 '>
              <h1 className=' text-[32px] font-semibold text-white'>Services We Offer</h1>
        <p className=' text-[14px] font-[500] text-white'>From IT infrastructure and automation to business strategy and digital growth — we provide end-to-end solutions designed to optimize your operations, elevate your brand, and future-proof your business.</p>
<ul className='flex flex-col gap-4'>
      <Link className='text-[40px] stroke-text' to="services">Translation Services</Link>
      <Link className='text-[40px] stroke-text' to="/services/languages">Interpretation Services</Link>
      <Link className='text-[40px] stroke-text' to="/services/localization">Localization Services</Link>
      <Link className='text-[40px] stroke-text' to="/services/voiceover">Voiceover Services</Link>
    </ul>
           </div>
       </div>

       <div className=' w-[40%] relative '>
          <div className=' w-[300px] mt-32  h-[300px] bg-[#56035d4e] blur-2xl rounded-full'>
            </div>
          <div className=' absolute top-0  bg-[#ffffff37] border-[1px] border-[#ffffff95] py-2 px-5 rounded-md'>
             <img src={service} alt="" />
        <h1 className=' text-[26px] font-semibold text-white'>Voiceover Services</h1>
        <p className=' text-white text-[16px] font-normal flex flex-col gap-3'>Your message, delivered with clarity and warmth. I specialize in professional female voiceovers for:
              <span>- Audiobooks</span>
               <span>- Children’s content</span>
               <span>- E-learning & explainer videos</span>
                <span>- Dubbing & YouTube content</span>
                     <span>- IVR systems & announcements</span></p>
          </div>
       </div>
    </div>
  )
}

export default Services