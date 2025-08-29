import React from 'react';
import img1 from '../../../assets/cart5.png';
import img2 from '../../../assets/cart6.png';
import img3 from '../../../assets/cart7.png';
import img4 from '../../../assets/cart8.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from 'swiper/modules';

const Realworld = () => {
  const data = [
    {
      title: "Language Solutions",
      description: "Secure, scalable tech solutions built to keep your operations running 24/7.",
      img: img1
    },
    {
      title: "Language Solutions",
      description: "Secure, scalable tech solutions built to keep your operations running 24/7.",
      img: img2
    },
    {
      title: "Language Solutions",
      description: "Secure, scalable tech solutions built to keep your operations running 24/7.",
      img: img3
    },
    {
      title: "Language Solutions",
      description: "Secure, scalable tech solutions built to keep your operations running 24/7.",
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
          Real World Example
        </h1>
        <p className='text-[14px] md:text-[16px] text-white text-center mt-2'>
          Explore a range of vocal styles, tones, and accents. Click below to listen to our handpicked samples — and discover the voice that fits your brand.
        </p>

        <div className='mt-12'>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            navigation={true}
            modules={[Pagination,Navigation]}
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
                <div className=''>
                  <img src={item.img} alt={item.title} className='w-full h-[435px] relative' />
                   <div className=''>
                    <h2 className='text-white text-[24px] absolute top-12 left-4  font-[500]'>{item.title}</h2>
                    <p className='text-white text-[18px] font-medium absolute bottom-6 left-4'>{item.description}</p>
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

export default Realworld;
