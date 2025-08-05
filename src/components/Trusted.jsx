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
        icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon9,icon10
    ]
  return (
     <div id='Clients' className=' flex flex-col gap-4 items-center justify-between mt-32'>
         <h1 className=' text-[32px] font-semibold text-white text-center'>Trusted By</h1>
         <p className=' text-[#969696] text-[14px] font-[500] text-center max-w-[555px]'>Trusted by startups, enterprises, and organizations who value smart tech and reliable support.</p>
          <div className=' flex items-center gap-5'>
              {images.map((item)=>(
              <img className='' src={item} alt="" />
          ))}
          </div>
     </div>
  )
}

export default Trusted