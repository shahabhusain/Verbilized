import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const data = [
    {
      question: "What types of voice over projects do you handle?",
      answer:
        "We provide voice overs for commercials, e-learning, audiobooks, IVR systems, corporate videos, dubbing, animation, and more.",
    },
    {
      question: "Which languages and accents do you offer?",
      answer:
                "We cover a wide range of languages and accents through our professional multilingual voice artists. Just share your preference, and we’ll match you with the right voice.",
    },
    {
      question: " How do I choose the right voice for my project?",
      answer:
        "You can browse our voice demos or let us know your project style (friendly, professional, energetic, authoritative, etc.) and we’ll suggest the best fits.",
    },
    {
      question: "Do you only provide translation, or other services too?",
      answer:
        "Along with translation, we also provide proofreading, editing, and back translation. Proofreading ensures your text is polished and error-free, while back translation is often required in sensitive fields like medical and legal to double-check accuracy against the original.",
    },
    {
      question: "How much does voice over cost?",
      answer:
        "Pricing depends on script length, language, usage rights, and turnaround time. Send us your script, and we’ll provide a free quote.",
    },
    {
      question: "How fast can you deliver a voice over?",
      answer:
        "Most projects are delivered within 24–48 hours. Larger or more complex projects may take longer, but we also offer rush delivery if needed.",
    },
    {
      question: "Do you use professional recording equipment?",
      answer:
        "Yes. All our recordings are done in professional studios or with broadcast-quality home setups to ensure clear, crisp audio.",
    },

      {
      question: "Can you add background music or sound effects?",
      answer:
        "Yes, if requested. While our standard service is clean voice recording, we can also provide background music, mixing, or full audio production.",
    },
     {
      question: "Do you provide revisions?",
      answer:
        "We offer revisions for pronunciation corrections, tone adjustments, or pacing tweaks so you’re 100% satisfied with the final result.",
    },
     {
      question: "Can you handle specialized industries like medical or technical narration?",
      answer:
        "Absolutely. We work with experienced voice artists trained in delivering complex scripts with clarity and precision.",
    },
     {
      question: "Do you also provide dubbing or lip-sync services?",
      answer:
        "Yes, we offer dubbing, lip-sync, and timed voice overs for video projects to make sure everything matches perfectly.",
    },
      {
      question: "Do you offer directed sessions during recording?",
      answer:
        "Yes! For many projects, we provide a directed session, where a language specialist or director joins the recording to guide the voice artist on pronunciation, tone, and delivery. This ensures accuracy from the start, saves time, and reduces the need for multiple revisions.",
    },
          {
      question: "Will I get usage rights for the recordings?",
      answer:
        "Yes. We provide clear licensing terms for commercial, online, or broadcast usage so you can use your recording with confidence.",
    },
          {
      question: "How do I get started?",
      answer:
        "Simply share your script, preferred language/accent, and style. We’ll send you voice samples and a quote to kick off your project.",
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
