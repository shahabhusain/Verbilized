import React from 'react'
import trusted from '../../../assets/trusted.png'
const Trusted = () => {
  return (
    <div className=' flex flex-col md:flex-row  justify-between md:w-[80%] px-4 mx-auto md:mt-32 mt-20'>
        <div className=' flex flex-col gap-4 md:w-1/2'>
            <h1 className=' text-[32px] font-[600] text-white max-w-[444px]'>Trusted Translation for Critical Documents</h1>
            <p className=' text-[#969696] text-[16px] font-[500]'>Our document translation services go beyond simple text conversion. We offer certified translations for official documents, ensuring compliance with local regulations and standards. Our legal translation services cover everything from contracts and agreements to litigation materials, while our medical translation expertise ensures that patient records, clinical trial documentation, and pharmaceutical materials are both accurate and culturally sensitive.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>At eTranslation Services, we offer top-tier document translation services that ensure your business communicates accurately and effectively across global markets. Our expert translators are skilled in a wide range of sectors, including legal, medical, financial, and general document translations, providing you with precise, culturally relevant translations tailored to your specific needs.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>Whether you’re translating contracts, patents, medical records, or financial reports, we ensure that every document adheres to industry standards and regulatory requirements. With our team of highly qualified linguists, you can trust that your content will be clear, compliant, and impactful in any language.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>Translation and localization are closely intertwined. For translations to truly resonate and create a meaningful impact, they must be both accurate and culturally relevant to your target audience. If you’re still paying full price for all your translation projects, we have a great solution for you! Experience the advantages of eTranslation Services’ simplified and cost-effective translation pricing today.</p>
        </div>
    <div className='md:w-[40%] md:relative'>
            <div className=' w-full md:block hidden  h-full bg-[#55035D] blur-2xl rounded-full'>
            </div>
            <img className=' md:absolute top-0 mt-5 md:mt-0' src={trusted} alt="" />
        </div>
    </div>
  )
}

export default Trusted