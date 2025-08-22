import React, { useState } from 'react';
import { Users, BookOpen, Edit, UserCheck, User } from 'lucide-react';

const Translator = () => {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Translator',
      icon: Users,
      description: 'Our process begins with a professional linguist who is a native speaker of the target language. This ensures that the translation is not only linguistically accurate but also culturally relevant.Our translators have deep expertise in specific industries such as legal, medical, financial, and technical fields.',
    },
    {
      id: '02',
      title: 'Proofreader',
      icon: BookOpen,
      description: 'Once the document is translated, it goes to our team of highly skilled proofreaders. These experts aren’t just experienced in language—they are also proficient in the specific field of translation. This dual expertise ensures that the translated document is free from errors and inconsistencies.',

    },
    {
      id: '03',
      title: 'Editor',
      icon: Edit,
      description: 'In the editing stage, the translated document is formatted to mirror the original as closely as possible, maintaining its layout, structure, and style. We understand that formatting plays a vital role in how the document is perceived, which is why we offer Desktop Publishing (DTP) Services.'
    },
    {
      id: '04',
      title: 'Client',
      icon: UserCheck,
      description: 'Finally, the translated document is delivered to you—our client—ensuring 100% accuracy and cultural relevance. We work closely with you throughout the process to ensure that your needs are met and your expectations are exceeded. At eTranslation Services, our commitment to quality means that we do more than just translate words—we ensure that the final document fully aligns with your goals and is ready for use in your target market. Whether you need the document for legal, medical, technical, or marketing purposes, we guarantee a professional, polished, and precise translation.'
    },
    {
      id: '05',
      title: 'Project Manager',
      icon: User,
      description: 'Once the translation, proofreading, and editing are complete, our experienced project managers step in to oversee the final checks. The project manager reviews the document for any last-minute details, ensuring that all formatting is consistent and that the document aligns with your specific requirements.',
    }
  ];

  return (
    <div className="relative flex flex-col md:flex-row md:mt-32 mt-20 px-4 md:px-0">
      {services.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row">
          {/* Side tab */}
          <div
            onClick={() => setActiveCard(index)}
            className="cursor-pointer border-[1px] border-[#ffffff0a] flex md:flex-col gap-5 md:h-[600px] md:w-[170px] items-center bg-[#863aa75e] p-4 rounded-l-md"
          >
            <h1 className="text-white md:text-[36px] text-[26px] font-[500]">{item.id}</h1>
            <h2 className="text-white md:text-[36px] text-[26px] font-[500] md:rotate-90 origin-bottom-center md:mt-32 whitespace-nowrap">
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
  );
};

export default Translator;
