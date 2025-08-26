import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const data = [
    {
      question: "What kind of content can you translate?",
      answer:
        "From personal documents like birth certificates and transcripts to professional materials such as websites, medical reports, legal contracts, and marketing content—we cover it all. No matter the format, our translators make sure your message comes across clearly and naturally.",
    },
    {
      question: "Which languages do you work with?",
      answer:
                "We provide translations in a wide range of languages, including major world languages as well as less common ones. If you have a specific language in mind, just let us know—we’ll connect you with a translator who specializes in it.",
    },
    {
      question: " How do you make sure the translation is accurate?",
      answer:
        "Every project is handled by a native-speaking translator who understands both the language and the culture. After translation, it goes through a quality check to make sure terminology, tone, and meaning are consistent and accurate.",
    },
    {
      question: "Do you only provide translation, or other services too?",
      answer:
        "Along with translation, we also provide proofreading, editing, and back translation. Proofreading ensures your text is polished and error-free, while back translation is often required in sensitive fields like medical and legal to double-check accuracy against the original.",
    },
    {
      question: "How quickly can I get my translation?",
      answer:
        "Delivery depends on the size and complexity of your document, but we’ll always give you a clear timeline upfront. If you need something urgently, we also provide rush translation services to meet tight deadlines.",
    },
    {
      question: "Do you only use human translators?",
      answer:
        "Yes—our translations are done by experienced human translators. While tools can help with speed, they can’t capture cultural nuances or tone. That’s why every translation is carefully crafted and reviewed by professionals.",
    },
    {
      question: "Can you handle specialized fields like legal or medical?",
      answer:
        "Absolutely. We have subject-matter experts who are familiar with technical terminology in areas like healthcare, law, education, and business. This ensures your translation is not only accurate but also industry-appropriate.",
    },

      {
      question: "Will my information stay private?",
      answer:
        "Yes. We take confidentiality very seriously. All your documents remain secure, and we can sign a non-disclosure agreement (NDA) if required.",
    },
     {
      question: "How much does it cost to translate my document?",
      answer:
        "The cost depends on the word count, language pair, and complexity. We keep our pricing transparent—simply share your document with us, and we’ll give you a free, no-obligation quote.",
    },
     {
      question: "Do you provide certified translations?",
      answer:
        "Yes, we offer certified translations for official purposes such as immigration, legal matters, or academic submissions. These come with a signed statement verifying accuracy.",
    },
     {
      question: "How do I get started?",
      answer:
        "It’s simple—just send us your document and tell us the target language and deadline. We’ll get back to you quickly with a quote and next steps.",
    },
  ]

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null) // close if already open
    } else {
      setOpenIndex(index) // open clicked question
    }
  }

  return (
    <div className='md:w-[80%] px-4 mx-auto flex items-center justify-center flex-col relative md:mt-32 mt-20'>
             <div>
                <h1 className=' text-[32px] font-[500] text-white text-center'>Frequently Asked Questions</h1>
          <p className=' text-[#969696] text-[14px] font-[500] text-center max-w-[655px] '>Got questions? We’ve answered some of the most common ones to help you understand how we work, what we offer, and how we can support your business.</p>
             </div>
         <div className=' md:block hidden w-[100%]  h-[750px] bg-[#56035d43] blur-2xl mt-20 rounded-full'>
            </div>
        <div className=' md:absolute top-32 mt-12 md:mt-0  w-full '>
            {data.map((item, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          className='bg-[#ffffff1d] py-5 px-4 mb-3 cursor-pointer rounded'
        >
          <div className='flex items-center justify-between'>
            <h1 className='text-[16px] font-[500] text-white'>
              {item.question}
            </h1>
           <div className=' bg-[#873AA7] p-1 rounded-full'>
                <IoIosArrowDown
              className={`text-white transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
           </div>
          </div>
          {openIndex === index && (
            <p className='text-[13px] font-normal text-white mt-2'>
              {item.answer}
            </p>
          )}
        </div>
      ))}
        </div>
    </div>
  )
}

export default Frequently
