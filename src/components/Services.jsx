import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Dummy images – replace with real image imports
import translationImg from '../assets/service1.png'
import interpretationImg from '../assets/service.png'
import languagePairsImg from '../assets/service2.png'
// import voiceoverImg from '../assets/voiceover.png'
import voiceoverImg from '../assets/service.png'

const Services = () => {
  const [open, setOpen] = useState(0) // default to first item

  const data = [
    {
      label: 'Translation Services',
      path: '/services',
      image: translationImg,
      title: 'Translation Services',
      description: 'Clear, fluent, and culturally appropriate translations. I provide expert translations for:\n- Medical and health content\n- NGO and community projects\n- Subtitles and scripts\n- Educational material\n- General business communication'
    },
    {
      label: 'Interpretation Services',
      path: '/services/interpretation',
      image: interpretationImg,
      title: 'Interpretation Services',
      description: 'Connecting people, one conversation at a time. With over two years of real-world experience, I offer:\n- Consecutive interpretation (remote)\n- Over-the-phone (OPI) & Video Remote (VRI)\n- Specialized in medical, insurance & education sectors\nHIPAA certified | Medical interpreter trained'
    },
    // {
    //   label: 'Language Pairs ',
    //   path: '/services/language',
    //   image: languagePairsImg,
    //   title: 'Language Pairs Services',
    //   description: 'Specialized support for multilingual translation combinations tailored to industry needs.\n- English ⇄ Pashto\n- English ⇄ Urdu\nStyle: Meaning-focused, natural, and\naudience-friendly\nConfidentiality guaranteed',
    // },
    {
      label: 'Voiceover Services',
      path: '/services/voiceover',
      image: voiceoverImg,
      title: 'Voiceover Services',
      description: 'Your message, delivered with clarity and warmth. Female voiceovers for:\n- Audiobooks\n- Children’s content\n- E-learning\n- Dubbing\n- IVR systems',
    },
    {
      label: 'Localization Services',
      path: '/services/localize',
      image: languagePairsImg,
      title: 'Localization Services',
      description: 'Adapt your content for global audiences – culturally relevant, linguistically accurate, and brand-consistent.',
    },
  ]

  return (
    <div id='Services' className='flex flex-col md:flex-row justify-between md:mt-12 items-center md:w-[80%] px-4 mt-20 mx-auto'>
      {/* Left Section */}
      <div className='md:w-1/2 md:relative'>
        <div className='w-[500px] md:block hidden h-[500px] bg-[#56035d9f] blur-[120px] rounded-full'></div>

        <div className='flex flex-col gap-3 md:absolute top-20'>
          <h1 className='text-[32px] font-semibold text-white'>Services We Offer</h1>
          <p className='text-[14px] font-[500] text-white'>
            From IT infrastructure and automation to business strategy and digital growth — we provide end-to-end solutions designed to optimize your operations, elevate your brand, and future-proof your business.
          </p>

          <ul className='flex flex-col gap-4 mt-4'>
            {data.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onMouseEnter={() => setOpen(index)}
                className={`text-[32px] stroke-text transition duration-200 ${
                  open === index ? 'text-white font-bold' : 'text-[#ffffff82]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className='md:w-[40%] md:relative top-12 mt-12 md:mt-0'>
        <div className='w-[400px] md:block hidden mt-32 h-[300px] bg-[#56035d4e] blur-2xl rounded-full'></div>

        <div className='md:absolute top-0 bg-transparent border-[1px] border-[#ffffff95] py-5 px-5 rounded-md'>
          <img src={data[open].image} alt={data[open].title} className="mb-4 rounded-md w-full h-auto" />
          <h1 className='text-[26px] font-semibold text-white'>{data[open].title}</h1>
          <p className='text-white text-[16px] font-normal whitespace-pre-line'>
            {data[open].description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
