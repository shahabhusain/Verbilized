import React, { useState, useRef, useEffect } from 'react';
import img1 from '../../../assets/cart5.png';
import img2 from '../../../assets/cart6.png';
import img3 from '../../../assets/cart7.png';
import img4 from '../../../assets/cart8.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules';
import Filter from './Filter';
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaRegCirclePause } from "react-icons/fa6";
// Female audio imports
import audio from '../../../assets/female/fe1.wav'
import audio1 from '../../../assets/female/fe2.mp3'
import audio2 from '../../../assets/female/fe3.mp3'
import audio3 from '../../../assets/female/fe4.wav'
import audio4 from '../../../assets/female/fe5.wav'
import audio5 from '../../../assets/female/fe6.wav'
import audio6 from '../../../assets/female/fe7.wav'
import audio7 from '../../../assets/female/fe9.wav'

// Male audio imports
import audio8 from "../../../assets/male/male1.wav"
import audio9 from "../../../assets/male/male2.wav"
import audio10 from "../../../assets/male/male3.wav"
import audio11 from "../../../assets/male/male4.wav"
import audio12 from "../../../assets/male/male5.wav"
import audio13 from "../../../assets/male/male6.wav"
import audio14 from "../../../assets/male/male7.wav"
import audio15 from "../../../assets/male/male8.wav" 

const Realworld = () => {
  // Data array
  const data = [
    // Female
    { value: "ar", audio: audio, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img1 },
    { value: "zh", audio: audio1, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img2 },
    { value: "zh", audio: audio2, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "ps", audio: audio3, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img4 },
    { value: "fa", audio: audio4, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img1 },
    { value: "fa", audio: audio5, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img2 },
    { value: "pa", audio: audio6, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "ur", audio: audio7, gender: "female", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },

    // Male
    { value: "ar", audio: audio8, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "dr", audio: audio9, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "dr", audio: audio10, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "hi", audio: audio11, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "ps", audio: audio12, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "fa", audio: audio13, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "pa", audio: audio14, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
    { value: "ur", audio: audio15, gender: "male", title: "Language Solutions", description: "Secure, scalable tech solutions built to keep your operations running 24/7.", img: img3 },
  ];

  // State
  const [gender, setGender] = useState(null);
  const [language, setLanguage] = useState(null);
  const [filterData, setFilterData] = useState(data);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  // Effect to handle audio playback
  useEffect(() => {
    // Pause all audio when playingIndex changes
    audioRefs.current.forEach((audio, index) => {
      if (audio && index !== playingIndex) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // Play the selected audio
    if (playingIndex !== null && audioRefs.current[playingIndex]) {
      audioRefs.current[playingIndex].play().catch(error => {
        console.error("Audio play failed:", error);
      });
    }
  }, [playingIndex]);

  // Filter handler
  const handleApply = () => {
    let filtered = data;
    
    if (gender && language) {
      filtered = data.filter(item => item.value === language && item.gender === gender);
    } else if (gender) {
      filtered = data.filter(item => item.gender === gender);
    } else if (language) {
      filtered = data.filter(item => item.value === language);
    }
    
    setFilterData(filtered);
    setPlayingIndex(null);
  };

  // Handle play/pause toggle
  const handlePlayPause = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <>
      <Filter
        gender={gender}
        setGender={setGender}
        language={language}
        setLanguage={setLanguage}
        onApply={handleApply}
      />

      <div className="relative w-full mt-32">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[600px] bg-[#56035d53] blur-2xl rounded-full z-0"></div>

        <div className="relative z-10 px-4 md:px-10">
          <h1 className="text-[28px] md:text-[32px] font-semibold text-white text-center">
            Real World Example
          </h1>
          <p className="text-[14px] md:text-[16px] text-white text-center mt-2">
            Explore a range of vocal styles, tones, and accents. Click below to listen to our
            handpicked samples — and discover the voice that fits your brand.
          </p>

          <div className="mt-12">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={40}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.5 },
              }}
              className="mySwiper"
            >
              {filterData.length > 0 ? filterData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[435px] object-cover"
                    />
                    <div>
                      <h2 className="text-white pl-4 text-[24px] absolute top-12 left-4 font-[500]">
                        {item.title}
                      </h2>
                      <p className="text-white pl-4 text-[15px] font-medium absolute bottom-6 left-4">
                        {item.description}
                      </p>
                      <audio
                        ref={el => audioRefs.current[index] = el}
                        src={item.audio}
                        preload="metadata"
                      />
                    </div>
                    <button 
                      onClick={() => handlePlayPause(index)} 
                      className='text-white absolute top-40 left-36 cursor-pointer'
                    >
                      {playingIndex === index ? 
                        <FaRegCirclePause size={100}/> : 
                        <MdOutlinePlayCircle size={100} />
                      }
                    </button>
                  </div>
                </SwiperSlide>
              )) :   <div className=' flex flex-col items-center justify-center gap-y-4'>
                <p className=' text-white text-[34px] font-bold text-center'>Didn’t find what you were looking for? Reach out to us, and we’ll send you samples in your requested language.</p>
                    <button
            onClick={()=>navigate("/services/getaquote")}
            className="bg-[#873AA7] cursor-pointer py-2 px-5 rounded-full text-white text-[14px] font-[600]"
          >
            Get a Quote
          </button>
                </div>}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Realworld;