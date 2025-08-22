import React from 'react'
import icon1 from '../assets/icons1.png'
import icon2 from '../assets/icons2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon5.png'
import icon7 from '../assets/icon4.png'
import icon8 from '../assets/icon3.png'
import icon9 from '../assets/icons2.png'
import icon10 from '../assets/icons1.png'

const Trusted = () => {
  const images = [
    icon1, icon2, icon3, icon4, icon5,
    icon6, icon7, icon8, icon9, icon10
  ]

  return (
    <div
      id='Clients'
      className='flex flex-col items-center gap-4 mt-20 px-4'
    >
      {/* Heading */}
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center'>
        Trusted By
      </h1>
      <p className='text-[#969696] text-sm sm:text-base text-center max-w-[555px]'>
        Trusted by startups, enterprises, and organizations who value smart tech and reliable support.
      </p>

      {/* Logos */}
      <div
        className='flex gap-6 md:overflow-hidden overflow-x-scroll no-scrollbar w-full sm:w-[90%] md:w-[80%] lg:w-[70%] py-4'
      >
        {images.map((item, i) => (
          <img
            key={i}
            src={item}
            alt={`Client ${i + 1}`}
            className='h-12 sm:h-16 md:h-20 object-contain flex-shrink-0'
          />
        ))}
      </div>
    </div>
  )
}

export default Trusted
