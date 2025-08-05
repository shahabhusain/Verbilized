import React from 'react';
import { Users, BookOpen, Edit, UserCheck, User } from 'lucide-react';

const Translator = () => {
  const services = [
    {
      id: '01',
      title: 'Translator',
      icon: Users,
      description: 'Our process begins with a professional linguist who is a native speaker of the target language. This ensures that the translation is not only linguistically accurate but also culturally relevant.',
      subDescription: 'Our translators have deep expertise in specific industries such as legal, medical, financial, and technical fields.'
    },
    {
      id: '02',
      title: 'Proofreader',
      icon: BookOpen,
      description: 'Professional proofreading services to ensure your content is error-free and polished. Our expert proofreaders review every detail.',
      subDescription: 'We focus on grammar, spelling, punctuation, and consistency to deliver flawless documents.'
    },
    {
      id: '03',
      title: 'Editor',
      icon: Edit,
      description: 'Comprehensive editing services that go beyond basic proofreading. We enhance clarity, flow, and overall readability.',
      subDescription: 'Our editors work on structure, style, and content organization to improve your message.'
    },
    {
      id: '04',
      title: 'Project Manager',
      icon: UserCheck,
      description: 'Dedicated project management to ensure timely delivery and quality control throughout the entire process.',
      subDescription: 'Our project managers coordinate all aspects of your project from start to finish.'
    },
    {
      id: '05',
      title: 'Client',
      icon: User,
      description: 'Client-focused approach ensuring your specific needs and requirements are met with precision and care.',
      subDescription: 'We maintain open communication and provide regular updates throughout the project.'
    }
  ];

  return (
    <div className=" mt-32 w-[100%] flex items-center justify-center relative ">
          <div className=' w-[100%]  h-[500px] bg-[#56035d48] blur-2xl rounded-full'>
            </div>
      <div className=" absolute top-0">
        <div className="flex flex-wrap gap-4 justify-center items-stretch">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-transparent border-[1px] border-[#ffc0cb4e] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-purple-500/25 w-[175px] h-[550px] hover:w-80"
              >
                {/* Card Number */}
                <div className="absolute group-hover:hidden top-6 left-6 text-white/60 text-[36px] font-[500]">
                  {service.id}
                </div>

                {/* Default State - Icon and Title */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 transition-all duration-700 group-hover:opacity-0">
                  <h3 className="text-white text-[36px] font-[500] tracking-wide transform -rotate-90 whitespace-nowrap">
                    {service.title}
                  </h3>
                </div>

                {/* Hover State - Expanded Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-start opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <div className="mb-4">
                    <IconComponent className="w-6 h-6 text-white/80 mb-3" strokeWidth={1.5} />
                    <h3 className="text-white text-[26px] font-[500] mb-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="text-white/80  leading-relaxed space-y-3">
                    <p className='text-[16px] font-[400]'>{service.description}</p>
                    <p className="text-white/60 text-[16px] font-[400]">
                      {service.subDescription}
                    </p>
                  </div>
                </div>

                {/* Subtle border effect on hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Translator;