import React from 'react'
import img1 from "../../../assets/img1.png"
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/img3.png"
import img4 from "../../../assets/img4.png"
import img5 from "../../../assets/img5.png"
import img6 from "../../../assets/img6.png"

const Carts = () => {
  const data = [
    { title: "Medical Document Translation", img: img1 },
    { title: "Legal Document Translation", img: img2 },
    { title: "Immigration Document Translation", img: img3 },
    { title: "Educational Document Translation", img: img4 },
    { title: "Certified Translation", img: img5 },
    { title: "Insurance Document Translation", img: img6 },
  ]

  return (
    <div className="bg-[#ffffff0a] py-12 mt-32 relative">
      {/* background glow */}
      <div className="hidden md:block w-full h-[200px] bg-[#56035d43] blur-2xl rounded-full absolute top-0 left-0"></div>

      {/* Container */}
      <div className="relative z-10">
        {/* Mobile: Horizontal scroll | Desktop: Grid */}
        <div className="flex md:grid  overflow-x-auto md:overflow-visible gap-8 px-4 md:px-12
                        md:grid-cols-3 lg:grid-cols-6 justify-center">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 min-w-[150px] md:min-w-0"
            >
              <img className="w-[60px] md:w-[70px]" src={item.img} alt={item.title} />
              <h1 className="text-center text-[14px] md:text-[16px] font-[600] text-white">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carts
