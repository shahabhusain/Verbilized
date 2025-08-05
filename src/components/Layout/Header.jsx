import React, { useState } from 'react'
import { Link } from 'react-scroll';

const Header = () => {
  const [open, setOpen] = useState(0)
  const navData = ["Home", "Introduction", "Services", "Demo", "Clients", "Testimonial"]

  return (
     <div className=' sticky top-0 z-[1000]'>
         <div className="relative py-3 ">
      {/* Background layer with opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-violet-900 opacity-[0.5] z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-between w-[80%] mx-auto">
        <button className="text-[24px] font-bold text-white">Sundus</button>
        <ul className="flex items-center gap-12 text-white">
          {navData.map((item, index) => (
            <Link
              to={item}
              smooth={true} 
              duration={500}
              key={index}
              onClick={() => setOpen(index)}
              className={`text-[14px] font-[400] text-white cursor-pointer pb-2 ${
                open === index ? 'border-b-[1px] border-b-white' : ''
              }`}
            >
              {item}
            </Link>
          ))}
        </ul>
        <Link to='contact' smooth={true} duration={500} className="bg-[#873AA7] cursor-pointer py-2 px-5 rounded-full text-white text-[14px] font-[600]">
          Get a Quote
        </Link>
      </div>
    </div>
     </div>
  )
}

export default Header
