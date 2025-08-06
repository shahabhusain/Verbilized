import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";
const Contactss = () => {
  return (
    <div className=' w-[80%] mx-auto flex items-start gap-12 mt-32'>

        <div className=' flex flex-col gap-5 w-1/2'>
            <p className=' text-white text-[14px] font-medium'>To quote or for questions: please fill out the quote form below or email us the document(s) with details or questions to contact@etranslationservices.com (Approx. response time 15 minutes).</p>
            <p className=' text-white text-[14px] font-medium'>For applicants, please go to our Careers page and use the appropriate application forms posted for the position you’re applying for. </p>
                <div className=' relative'>
                       <div className=' w-full  h-[700px] bg-[#56035d53] blur-2xl rounded-full'>
            </div>
                       <form className=' absolute top-0 flex flex-col gap-5 bg-[#ffffff06] px-6 pb-12 pt-6 border-[#ffffff62] border-[1px] rounded-2xl'>
                <h1 className=' text-[20px] font-[600] text-white'>Get quote</h1>
                <div className=' flex items-center gap-3 w-full'>
                     < input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff49] rounded-md w-full focus:outline-none text-white' placeholder="Title" />
                      <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="First Name" />
                </div>
                 <div className=' flex items-center gap-3 w-full'>
                     <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Last Name" />
                      <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Email" />
                </div>
                 <div className=' flex items-center gap-3 w-full'>
                     <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="92+ ********" />
                      <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Preferred Service Type" />
                </div>
                 <div className=' flex items-center gap-3 w-full'>
                     <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Additional Services" />
                      <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Source Language:" />
                </div>
                 <div className=' flex items-center gap-3 w-full'>
                     <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Target Language (s)" />
                      <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Your Document" />
                </div>
                 <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md focus:outline-none text-white w-full' placeholder="Upload here if you have more than 10 Documents:" />
                 <div className=' flex items-center gap-3 w-full'>
                     <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="Promo Code" />
                      <input className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' placeholder="How did you hear about us?" />
                </div>
                <textarea className=' py-2 px-5 bg-[#393838] border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white' rows={7} placeholder='Notes'></textarea>
            </form>
                </div>
        </div>
         <div className='w-1/2 flex flex-col gap-4'>
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