import React, { useState } from "react";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img9 from "../../../assets/img9.png";
import img10 from "../../../assets/img10.png";
import img11 from "../../../assets/img11.png";
import img12 from "../../../assets/img12.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carts = () => {
  const [currentBox, setCurrentBox] = useState(0);

  const data = [
    { title: "Legal", desc: "Contracts, court documents, patents, and compliance materials.", img: img1 },
    { title: "Medical & Pharmaceutical", desc: "Patient records, clinical trials, medical device manuals, and healthcare marketing.", img: img2 },
    { title: "Finance & Banking", desc: "Annual reports, investment documents, insurance policies, and fintech content.", img: img3 },
    { title: "Technology & IT", desc: "Software localization, user manuals, cybersecurity protocols, and AI documentation.", img: img4 },
    { title: "Marketing & Advertising", desc: "Campaigns, social media content, branding materials, and market research.", img: img5 },
    { title: "E-commerce & Retail", desc: "Product descriptions, customer support, and multilingual SEO.", img: img6 },
    { title: "Travel & Hospitality", desc: "Hotel guides, tourism promotions, and booking platforms.", img: img7 },
    { title: "Education & E-Learning", desc: "Academic transcripts, training modules, and educational software.", img: img8 },
    { title: "Entertainment & Media", desc: "Subtitling, dubbing, gaming localization, and press releases.", img: img9 },
    { title: "Manufacturing & Engineering", desc: "Technical manuals, safety guidelines, and supply chain communications.", img: img10 },
    { title: "Government & NGOs", desc: "Policy documents, international development reports, and humanitarian aid content.", img: img11 },
    { title: "Automotive & Aerospace", desc: "Vehicle manuals, maintenance guides, and aviation compliance texts.", img: img12 },
  ];

  const handleNext = () => {
    setCurrentBox((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentBox((prev) => (prev - 1 + data.length) % data.length);
  };

  // Show 6 items but cycle through
  const visibleItems = Array.from({ length: 6 }, (_, i) => data[(currentBox + i) % data.length]);

  return (
    <div className="bg-[#ffffff0a] py-12 mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="hidden md:block w-full h-[200px] bg-[#56035d43] blur-2xl rounded-full absolute top-0 left-0"></div>

      {/* Container */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4 md:px-12">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-3 rounded-lg"
            >
              <img className="w-[55px] sm:w-[60px] md:w-[70px]" src={item.img} alt={item.title} />
              <div>
                <h1 className="text-[13px] sm:text-[14px] md:text-[16px] font-[600] text-white">
                  {item.title}
                </h1>
                <p className="text-[11px] sm:text-[12px] md:text-[13px] font-[500] text-white/50 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-between md:absolute md:top-6 md:w-full items-center px-6 mt-6 md:mt-10">
          <button
            onClick={handlePrev}
            className="bg-[#00000040] text-white p-3 rounded-full hover:bg-[#00000070] transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#00000040] text-white p-3 rounded-full hover:bg-[#00000070] transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
