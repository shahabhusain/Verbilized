import React from 'react'
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
const ServicesButton = ({setOpenDropDown, openDropDown}) => {
  return (
    <div>
                      <div 
      className="relative inline-block"
      onMouseEnter={() => setOpenDropDown(true)} 
      onMouseLeave={() => setOpenDropDown(false)}
    >
      {/* Button */}
      <button className="flex items-center gap-1 text-[14px] font-[400] text-white cursor-pointer pb-2 hover:text-gray-300 transition">
        Services <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {openDropDown ? 
        <div className="absolute top-[16px] left-0 mt-2 w-[222px] bg-black text-white rounded-xl shadow-lg border border-gray-800 overflow-hidden animate-fadeIn">
          <ul className="flex flex-col">
            <Link to='/services' className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition">Translational Services</Link>
            <Link to='/services/interpretation' className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition">Interpretation Services</Link>
            <Link to='/services/voiceover' className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition">Voiceover Services</Link>
            <Link to='/services/localize' className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition">Localization Services</Link>

          </ul>
        </div>
       : null}
    </div>
    </div>
  )
}

export default ServicesButton