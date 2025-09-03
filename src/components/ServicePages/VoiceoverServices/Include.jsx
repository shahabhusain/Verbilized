import React, { useState } from 'react'
import img1 from '../../../assets/icons11.png'
import img2 from '../../../assets/icons12.png'
import img3 from '../../../assets/icons3.png'
import img4 from '../../../assets/icons4.png'
import img5 from '../../../assets/icons5.png'
import img6 from '../../../assets/icons6.png'
import img7 from '../../../assets/icons7.png'
import img8 from '../../../assets/icons8.png'
import img9 from '../../../assets/icons9.png'
import img10 from '../../../assets/icons10.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Include = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const includeData = [
        {
            img:img1,
            title:"Commercials (TV, Radio, Online)",
            desc:"Capture attention instantly with powerful, memorable delivery."
        },
        {
            img:img2,
            title:"Corporate & E-Learning Narration",
            desc:"Professional, clear voices that make complex information easy to understand."
        },
        {
            img:img3,
            title:"Audiobooks & Storytelling",
            desc:"Engaging narration that brings stories and ideas to life."
        },
        {
            img:img4,
            title:"Video Game Voice Acting",
            desc:"Immersive, dynamic voices for characters, NPCs, and in-game narration."
        },
        {
            img:img5,
            title:"Trailers & Promos",
            desc:"Dramatic, compelling reads that build anticipation and excitement."
        },
        {
            img:img6,
            title:"IVR, Phone Systems & Announcements",
            desc:"Friendly, clear voices for on-hold messages, greetings, and automated systems."
        },
        {
            img:img7,
            title:"Documentary Narration",
            desc:"Informative, credible voices that keep audiences engaged from start to finish."
        },
        {
            img:img8,
            title:"Virtual Assistant & GPS Voices",
            desc:"Natural, conversational voices for AI assistants, navigation, and devices."
        },
        {
            img:img9,
            title:"Health, Wellness & Meditation Guides",
            desc:"Calming, soothing delivery for relaxation and mindfulness content."
        },
        {
            img:img10,
            title:"Animation & Character Voices",
            desc:"Energetic and versatile performances for cartoons, explainer videos, and more."
        },
    ]

    return (
        <div className='md:w-[80%] px-4 md:px-0 mx-auto md:mt-32 mt-20'>
            <h1 className='text-[32px] text-center font-semibold text-white'>Our Voiceover Services Include</h1>
            <Swiper
                slidesPerView={1.2}
                spaceBetween={20}
                navigation={true}
                centeredSlides={true}
                initialSlide={2}
                modules={[Pagination, Navigation]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3.5 }
                }}
                className="mySwiper mt-12"
            >
                {includeData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className={`
                                flex justify-between items-center h-[130px] gap-2 p-4 rounded-2xl 
                                transition-all duration-500 ease-in-out
                                ${index === activeIndex 
                                    ? 'bg-gradient-to-r from-purple-700 to-purple-800 scale-110 shadow-2xl shadow-purple-500/30 z-10' 
                                    : 'bg-[#863aa744] scale-95 opacity-70'
                                }
                            `}
                        >
                            <div>
                                <h1 className={`font-[600] text-white transition-all duration-300 ${
                                    index === activeIndex ? 'text-[18px]' : 'text-[16px]'
                                }`}>
                                    {item.title}
                                </h1>
                                <p className={`font-medium text-white/50 transition-all duration-300 ${
                                    index === activeIndex ? 'text-[13px] text-white/80' : 'text-[12px]'
                                }`}>
                                    {item.desc}
                                </p> 
                            </div>
                            <img 
                                className={`transition-all duration-300 ${
                                    index === activeIndex ? 'w-[80px]' : 'w-[70px]'
                                }`} 
                                src={item.img} 
                                alt="" 
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                .swiper-slide {
                    transition: transform 0.5s ease-in-out !important;
                }
                
                .swiper-slide-active {
                    z-index: 10 !important;
                }
                
                .swiper-button-next,
                .swiper-button-prev {
                    color: white !important;
                    background: rgba(134, 58, 167, 0.3) !important;
                    backdrop-filter: blur(10px) !important;
                    border-radius: 50% !important;
                    width: 45px !important;
                    height: 45px !important;
                    transition: all 0.3s ease !important;
                }
                
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background: rgba(134, 58, 167, 0.5) !important;
                    transform: scale(1.1) !important;
                }
                
                .swiper-button-next::after,
                .swiper-button-prev::after {
                    font-size: 16px !important;
                }
            `}</style>
        </div>
    )
}

export default Include