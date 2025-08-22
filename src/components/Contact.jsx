import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className=' md:w-[50%] mx-auto md:mt-[3rem] mt-20 px-4'>
        <h1 className=' text-[32px] font-[600] text-white text-center'>Contact us</h1>
        <p className=' text-[#969696] text-[14px] font-[500] text-center'>Have a project in mind or a question? We’re here to help you every step of the way.  Let’s start building something impactful together.</p>
          <form className=' flex flex-col gap-4 mt-12 bg-[#863aa718] rounded-md p-12 border-[1px] border-[#ffffff57]'>
              <h1 className=' text-white text-[20px] text-center font-semibold'>Send a massage</h1>
             <input className=' py-2 px-5 border-none rounded-md focus:outline-none text-white bg-[#393838]' type="text" placeholder='Name' />
             <input className=' py-2 px-5 border-none rounded-md focus:outline-none text-white bg-[#393838]' type="email" placeholder='Email' />
              <textarea className='py-2 px-5 rounded-md focus:outline-none text-white bg-[#393838]' rows={7} placeholder='Type your message' />
              <button className=' bg-[#873AA7] py-2 px-5 rounded-full text-white text-[14px] font-[600]'>Submit</button>
          </form>
    </div>
  )
}

export default Contact