import React from 'react'
import icon1 from '../../../assets/imgg.png'
import icon2 from '../../../assets/imgg1.png'
const Interpretation = () => {
  return (
    <div className='relative md:w-[80%] px-4 md:px-0 mx-auto md:mt-60 mt-12'>
          <h1 className=' text-[32px] font-[600] text-white text-center'>Our Interpretation Services</h1>
            <div className=' md:block hidden w-full  h-[400px] bg-[#56035d53] blur-2xl rounded-full'>
            </div>
    <div className=' flex flex-col md:flex-row items-start gap-6 md:absolute md:top-32 mt-12 md:mt-0 w-full'>
                <div className=' flex flex-col md:w-1/2 gap-4 items-start border-[#ffffff20] border-[1px] p-12 rounded-lg '>
            <img src={icon1} alt="" />
            <h1 className=' text-white text-[26px] font-[600]'>Video Interpretation</h1>
            <p className=' text-[16px] font-normal text-white'>As virtual communication becomes more widespread, eTranslation Services is at the forefront of providing video interpretation (VRI) services. Whether it's a business meeting, remote medical consultation, or legal proceedings, our video interpreters deliver exceptional clarity and accuracy in real-time.</p>
        </div>
         <div className=' flex flex-col md:w-1/2 gap-4 items-start border-[#ffffff20] border-[1px] p-12 rounded-lg '>
            <img src={icon2} alt="" />
            <h1 className=' text-white text-[26px] font-[600]'>Over the Phone Interpretation</h1>
            <p className=' text-[16px] font-normal text-white'>For situations where immediate interpretation is needed, Etranslation Services offers reliable and efficient over-the-phone interpretation (OPI). Our trained interpreters are available at a moment's notice, ready to assist with everything from urgent client calls to emergency services.</p>
        </div>
    </div>
    </div>
  )
}

export default Interpretation