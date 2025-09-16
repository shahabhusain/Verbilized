import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Translational from './Translational';
import Voice from './Voice';
import Opi from './Opi';
import Vri from './Vri';
import Localize from './Localize';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
const Contactss = () => {
    const [value, setValue] = useState("");
  const [open, setOpen] = useState("translation")
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const services = [
  { id: "translation", label: "Translation" },
  { id: "voiceover", label: "Voice Over" },
  { id: "opi", label: "OPI (On Phone Interpretation)" },
  { id: "vri", label: "VRI (Video Remote Interpretation)" },
  { id: "localize", label: "Localization" },
];
  return (
    <div className=' md:w-[80%] px-4 md:px-0 mx-auto flex flex-col md:flex-row items-start gap-12 md:mt-32 mt-20'>

        <div className=' flex flex-col gap-5 md:w-1/2'>
            <p className=' text-white text-[14px] font-medium'>To quote or for questions: please fill out the quote form below or email us the document(s) with details or questions to contact@etranslationservices.com (Approx. response time 15 minutes).</p>
            <p className=' text-white text-[14px] font-medium'>For applicants, please go to our Careers page and use the appropriate application forms posted for the position you’re applying for. </p>
                <div className=' relative'>
                       <div className=' w-full  h-[860px] bg-[#56035d53] blur-2xl rounded-full'>
            </div>
                       <form onSubmit={handleSubmit} className=' absolute top-0 flex flex-col gap-5 bg-[#ffffff06] px-6 pb-12 pt-6 border-[#ffffff62] border-[1px] rounded-2xl'>
                <h1 className=' text-[20px] font-[600] text-white'>Get quote</h1>
                   < input className=' py-2 px-5 bg-transparent border-[1px] border-[#ffffff49] rounded-md w-full focus:outline-none text-white' placeholder="Title" />
                <div className=' flex items-center gap-3 w-full'>
                  
                      <input className=' py-2 px-5 bg-transparent  border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="First Name" />
                       <input className=' py-2 px-5 bg-transparent  border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Last Name" />
                </div>
                 <div className=' flex items-center gap-3 w-full'>
                    
                      <input className=' py-2 px-5 bg-transparent border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Email" />
        <PhoneInput
          country={'pk'}              // default
          value={value}
          onChange={setValue}
          inputProps={{ name: "phone" }}
          inputStyle={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', width: '100%' }}
          buttonStyle={{ background: 'transparent' }}
        />

                </div>
                <h1 className="text-[20px] font-semibold text-white">Services</h1>
<div className="flex flex-col items-start gap-4 text-white">
  {services.map((service) => (
    <button
      key={service.id}
      type="button"
      className={`flex items-center gap-2 transition-all ${
        open === service.id
          ? "text-pink-600 font-semibold text-[15px]"
          : "text-white text-[14px]"
      }`}
      onClick={() => setOpen(service.id)}
    >
      <span
        className={`h-[15px] w-[15px] rounded-full border-[2px] border-[#fff] transition-all ${
          open === service.id ? "bg-pink-600 border-white" : ""
        }`}
      ></span>
      {service.label}
    </button>
  ))}
</div>
                 {    open === "translation" ? <Translational /> : open === "voiceover" ? <Voice /> : open === "opi" ? <Opi /> : open === "vri" ? <Vri /> : open === "localize" ? <Localize /> : null}
                <textarea className=' py-2 px-5 bg-transparent border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' rows={7} placeholder='Notes'></textarea>
                <button className=' bg-pink-600 py-2 rounded-full text-white font-semibold'>Submit</button>
            </form>
                </div>
        </div>
         <div className='md:w-1/2 flex flex-col gap-4'>
           <p className=' text-[#873AA7] text-[14px] font-[400]'>Let’s Have A Talk About Something Interesting!</p>
           <h1 className=' text-[24px] font-semibold text-white'>If you have a project you would like to discuss, We'd love to hear from you.</h1>
           <p className=' text-[14px] text-white font-normal'>Please feel free to contact us via phone, email, or this form! We respect your privacy and will never share this information with a third party.
If you’d like a walk-in appointment, kindly call ahead to schedule. Thank you!</p>

           

              <div className=' flex items-start gap-2'>
            <SlLocationPin size={25} className=' text-white' />
            <div className=' flex flex-col gap-3'>
                <h1 className=' text-[14px] font-normal text-white'>Headquarters</h1>
                <h2 className=' text-[14px] font-bold text-white'>eTranslation Services</h2>
                <p className=' text-[14px] font-normal text-white'>251 2nd Street Suite # 202 Lakewood NJ 08701</p>
            </div>
          </div>

              <div className=' flex items-start gap-2'>
            <IoIosInformationCircleOutline size={25} className=' text-white' />
            <div className=' flex flex-col gap-3'>
                <h1 className=' text-[14px] font-normal text-white'>Get In Touch</h1>
                <h2 className=' text-[14px] font-bold text-white'>Phone: </h2>
                <p className=' text-[14px] font-normal text-white'>1-800-882-6058 contact@etranslationservices.com</p>
            </div>
          </div>
         </div>       
    </div>
  )
}

export default Contactss