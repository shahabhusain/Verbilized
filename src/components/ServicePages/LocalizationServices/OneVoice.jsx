import React from 'react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OneVoice = () => {
  const data = [
    {
      title: "Studio-Grade Audio, Ready to Use",
      description: "You’ll receive your recordings in broadcast-quality 48kHz .wav format, captured using professional equipment for crystal-clear sound and minimal post-processing.",
      img: img1
    },
    {
      title: "End-to-End Voiceover Solutions",
      description: "Need help with scripting, localization, or audio editing? We offer full-service production support so you can relax while we take care of the technical details.",
      img: img2
    },
    {
      title: "Let’s Bring Your Words to Life",
      description: "Whether it’s an ad, audiobook, explainer, or training video, Verbalizers is your go-to partner for powerful voiceovers across the globe.",
      img: img3
    },
    {
      title: "Professional Voiceover Services by Verbalizers",
      description: "At Verbalizers, we turn your scripts into voices that captivate, connect, and convert. Whether you need a single voice for a brand video or a full cast for a global campaign, we deliver high-quality voiceovers that bring your message to life — in any language, for any audience.",
      img: img4
    },
  ];

  return (
    <div className='relative w-full mt-32'>
      {/* Background blur */}
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[100%] h-[600px] bg-[#56035d53] blur-2xl rounded-full z-0'></div>

      {/* Main content */}
      <div className='relative z-10 px-4 md:px-10'>
        <h1 className='text-[28px] md:text-[32px] font-semibold text-white text-center'>
          One Voice or Many — We’ve Got You Covered
        </h1>
        <p className='text-[14px] md:text-[16px] text-white text-center mt-2'>
          Get to know about what we do and what we provide
        </p>

        <div className='mt-12'>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 }
            }}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='border border-[#ffffff39] bg-[#ffffff12] px-6 py-10 rounded-2xl h-[385px] flex flex-col gap-4 justify-between'>
                  <div className=' flex flex-col gap-2'>
                    <img className=' w-[70px]' src={item.img} alt="" />
                    <h2 className='text-white text-[18px] mt-12 font-semibold mb-2'>{item.title}</h2>
                    <p className='text-white text-[14px]'>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OneVoice;
