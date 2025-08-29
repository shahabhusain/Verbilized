import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const data = [
    {
      question: "Which platforms do you provide interpretation on?",
      answer:
        "We work with the most widely used platforms including Zoom, Skype, Google Meet, and Microsoft Teams. If you have another preference, let us know—we’ll adjust to your setup.",
    },
    {
      question: "How much notice do you need to book an interpreter?",
      answer:
                "We recommend making your request at least seven business days in advance to secure availability. However, we also offer on-demand services when urgent situations arise.",
    },
    {
      question: "Will there always be a backup interpreter available?",
      answer:
        "Yes. For every session, we schedule a primary interpreter and a backup interpreter to ensure your meeting runs smoothly without interruptions.",
    },
    {
      question: "What happens if my session is canceled?",
      answer:
        "If a session is canceled within 24 hours of the scheduled time, the full payment still applies. ",
    },
    {
      question: "Do you provide both consecutive and simultaneous interpretation?",
      answer:
        "Yes. We offer consecutive, simultaneous, and over-the-phone interpretation, depending on your event or meeting requirements.",
    },
    {
      question: "Which industries do you specialize in?",
      answer:
        "Our interpreters are experienced in legal, medical, business, government, and community services. Each interpreter is carefully matched to your industry to ensure accuracy and professionalism.",
    },
    {
      question: "How do you maintain confidentiality?",
      answer:
        "All interpreters follow strict confidentiality policies, and NDAs can be signed upon request. Sensitive information remains secure at all times.",
    },

      {
      question: "How do I know the interpreter is qualified?",
      answer:
        "We work only with trained, professional interpreters who have experience in both the target language and the industry. Many hold certifications in specialized fields such as legal or medical.",
    },
     {
      question: " What if the interpreter faces technical issues during the session?",
      answer:
        "That’s where the backup interpreter comes in. If any technical issue arises, the backup steps in immediately to avoid delays.",
    },
     {
      question: "How do I book an interpreter?",
      answer:
        "Simply share your language pair, industry, date, platform preference (Zoom, Skype, etc.), and duration of the session. We’ll confirm availability and provide you with a quote.",
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
         <div className=' md:block hidden w-[100%]  h-[950px] bg-[#56035d43] blur-2xl mt-20 rounded-full'>
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

export default Faqs
