import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const data = [
    {
      question: "Why should I choose eTranslation Services over another translation company?",
      answer:
        "eTranslation Services stands out for its commitment to accuracy, fast turnaround times, and a team of certified professional linguists. We provide personalized service tailored to your specific industry needs, ensuring high-quality translations every time.",
    },
    {
      question: "Why do interpreters need access to event speeches and presentations before the event?",
      answer:
        "Providing interpreters with speeches and presentations in advance allows them to familiarize themselves with the subject matter, terminology, and context. This preparation ensures smoother, more accurate interpretation during the event.",
    },
    {
      question: "What is the difference between translation and interpreting?",
      answer:
        "Translation involves converting written text from one language to another, while interpreting deals with spoken language in real-time. Both require different skill sets and techniques, tailored to the specific medium being used.",
    },
    {
      question: "How much does professional language translation cost?",
      answer:
        "The cost of professional translation depends on several factors, including the length and complexity of the text, language pair, subject matter, and turnaround time. We provide customized quotes based on your project requirements.",
    },
    {
      question: "How do you ensure high-quality translation?",
      answer:
        "We ensure high-quality translation through a rigorous process that includes using native-speaking translators, subject matter experts, and multiple rounds of proofreading and quality assurance to maintain accuracy and consistency.",
    },
    {
      question: "How does eTranslation Services guarantee quality?",
      answer:
        "We guarantee quality by working with certified translators, employing a robust quality control process, and utilizing advanced translation tools to maintain accuracy, consistency, and cultural relevance in every project.",
    },
    {
      question: "How soon will the translation be completed?",
      answer:
        "Turnaround times vary depending on the size and complexity of the project. However, we always strive to meet your deadlines and can provide expedited services if needed. Contact us to discuss your timeline.",
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
    <div className='w-[80%] mx-auto flex items-center justify-center flex-col relative mt-32'>
             <div>
                <h1 className=' text-[32px] font-[500] text-white text-center'>Frequently Asked Questions</h1>
          <p className=' text-[#969696] text-[14px] font-[500] text-center max-w-[655px] '>Got questions? We’ve answered some of the most common ones to help you understand how we work, what we offer, and how we can support your business.</p>
             </div>
         <div className=' w-[100%]  h-[600px] bg-[#56035d43] blur-2xl mt-20 rounded-full'>
            </div>
        <div className=' absolute top-32  w-full '>
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
