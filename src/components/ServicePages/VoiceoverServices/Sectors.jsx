import React from 'react'
import img1 from "../../../assets/img7.png"
import img2 from "../../../assets/img9.png"
import img3 from "../../../assets/img11.png"
import img4 from "../../../assets/img12.png"
import img5 from "../../../assets/img13.png"
import img6 from "../../../assets/imgg.png"

const Sectors = () => {
  const data = [
    { title: "Advertising & Commercials", img: img1 },
    { title: "E-learning & Training", img: img2 },
    { title: "IVR & Phone Systems", img: img3 },
    { title: "Animation & Dubbing", img: img4 },
    { title: "Audiobooks & Storytelling", img: img5 },
    { title: "Corporate & Explainer Videos", img: img6 },
  ]

  return (
    <div className="mt-32 px-4 md:px-12">
      {/* Heading */}
      <h1 className="text-white text-center text-2xl md:text-4xl font-semibold">
        We work with clients across a variety of sectors
      </h1>
      <p className="text-[#969696] text-center text-sm md:text-base font-medium mt-2">
        Trusted by startups, enterprises, and organizations who value smart tech
        and reliable support that we work with them
      </p>

      {/* Background glow */}
      <div className="bg-[#ffffff0a] relative py-12 md:px-12 px-4 mt-12 rounded-2xl">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[90%] md:w-[70%] h-[200px] bg-[#56035d43] blur-3xl rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 bg-[#ffffff0a] rounded-xl hover:scale-105 transition-transform"
            >
              <img className="w-12 md:w-16" src={item.img} alt={item.title} />
              <h1 className="text-center text-sm md:text-base font-semibold text-white">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sectors
