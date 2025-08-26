import React, { useState } from 'react';
import { Users, Globe, Edit, Handshake, Search, Lock } from "lucide-react";


const Covered = () => {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Translation of Content',
      icon: Users,
      description: 'Beyond direct translation, localization involves adjusting content to align with local cultural norms and values. This can include modifying visuals, colors, symbols, or even altering the style of communication to better resonate with the local audience. Cultural nuances such as humor, references, and traditions are all considered to ensure relevance.',
    },
    {
      id: '02',
      title: 'Cultural Adaptation',
      icon: Globe,
      description: 'Once the document is translated, it goes to our team of highly skilled proofreaders. These experts aren’t just experienced in language—they are also proficient in the specific field of translation. This dual expertise ensures that the translated document is free from errors and inconsistencies.',

    },
    {
      id: '03',
      title: 'Design and Layout Adjustments',
      icon: Edit,
      description: 'Localization requires making adjustments to the design and layout of digital assets such as websites, mobile apps, and marketing materials. This can involve resizing text, images, or buttons, changing navigation elements, or even adjusting the overall layout to ensure that the content looks natural and is easy to navigate for local users.'
    },
    {
      id: '04',
      title: 'Legal and Regulatory Compliance',
      icon: Handshake,
      description: 'When expanding globally, it’s essential to adhere to local regulations, including privacy laws, advertising standards, and industry-specific compliance requirements. eTranslation Services ensures that your localized content meets these legal and regulatory requirements in each target market, reducing the risk of legal issues.'
    },
    {
      id: '05',
      title: 'SEO and Keyword Optimization',
      icon: Search,
      description: 'Localization also extends to optimizing your digital content for search engines in each target market. This includes local keyword research, adapting SEO strategies, and ensuring that your content ranks well for relevant search queries in different languages. Proper SEO practices ensure that your localized website or app can be found by local audiences.',
    },
        {
      id: '06',
      title: 'Quality Assurance and Testing',
      icon: Lock,
      description: 'After the translation and localization process, eTranslation Services conducts thorough quality assurance checks to ensure that the localized content works correctly in its new environment. This includes linguistic reviews, functional testing (such as checking for text overflow or misalignment), and usability tests to ensure a seamless user experience in each market.',
    }
  ];

  return (
        <div className='md:mt-32 mt-20'>
            <h1 className=' text-white text-[32px] font-semibold text-center'>One Voice or Many — We’ve Got You Covered</h1>
            <p className=' text-[16px] font-[400] text-white/50 text-center'>Get to know about what we do and what we provide</p>
            <div className="relative flex flex-col md:flex-row mt-12  px-4 md:px-0">
      {services.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row">
          {/* Side tab */}
          <div
            onClick={() => setActiveCard(index)}
            className="cursor-pointer border-[1px] border-[#ffffff0a] flex md:flex-col gap-5 md:h-[600px] md:w-[170px] items-center bg-[#863aa75e] p-4 rounded-l-md"
          >
            <h1 className="text-white md:text-[30px] text-[16px] font-[500]">{item.id}</h1>
            <h2 className="text-white md:text-[30px] text-[16px] font-[500] md:rotate-90 origin-bottom-center md:mt-60 whitespace-nowrap">
              {item.title}
            </h2>
          </div>

          {/* Animated content */}
          <div
            className={`flex flex-col justify-center items-start gap-4 bg-[#402D47] overflow-hidden transition-all duration-500 ease-in-out`}
            style={{
              maxWidth: activeCard === index ? "800px" : "0px",
              maxHeight: activeCard === index ? "600px" : "0px",
              opacity: activeCard === index ? 1 : 0,
              padding: activeCard === index ? "2rem" : "0rem"
            }}
          >
            <item.icon size={50} color="white" />
            <h1 className="text-[26px] font-[500] text-white">{item.title}</h1>
            <p className="text-[16px] font-[400] text-white">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
  );
};

export default Covered;
