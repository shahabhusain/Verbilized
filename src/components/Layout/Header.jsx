import { MenuIcon, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import ServicesButton from './ServicesButton';
const Header = () => {
  const [open, setOpen] = useState(0);
  const [openSide, setOpenSide] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false)

  const navData = ["Home", "Introduction", "Demo", "Clients", "Contact"];
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-[1000] backdrop-blur-2xl">
      <div className={`relative ${openSide ? "" : "py-3"}`}>
        {/* Background layer */}
        <div className="absolute z-[-1] inset-0 bg-gradient-to-r from-purple-900 to-violet-900 opacity-[0.5]" />

        {/* Desktop */}
        <div className="relative hidden z-10 md:flex items-center justify-between w-[80%] mx-auto">
          <button className="text-[24px] font-bold text-white">Verbalizers</button>
          <nav className="flex items-center gap-12 text-white">
            {navData.map((item, index) => (
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-90}
                key={index}
                onClick={() => setOpen(index)}
                className={`text-[14px] font-[400] text-white cursor-pointer pb-2 ${
                  open === index ? "border-b-[1px] border-b-white" : ""
                }`}
              >
                {item}
              </Link>
            ))}
            <ServicesButton openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} />
          </nav>
          <button
            onClick={()=>navigate("/services/getaquote")}
            className="bg-[#873AA7] cursor-pointer py-2 px-5 rounded-full text-white text-[14px] font-[600]"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile */}
        <div className="relative md:hidden">
          {/* Top Bar */}
          <div
            className={`${
              openSide ? "text-black" : "text-white"
            } flex items-center justify-between px-4 py-3`}
          >
            <button className="text-[24px] font-bold">Sundus</button>
            <button onClick={() => setOpenSide(!openSide)}>
              {openSide ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>

          {/* Side Menu */}
          <div
            className={`fixed top-0 left-0 h-screen w-[80%] bg-white z-40 transform transition-transform duration-300 ${
              openSide ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center gap-10 mt-16">
              {navData.map((item, index) => (
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  key={index}
                  offset={-90}
                  onClick={() => {
                    setOpen(index);
                    setOpenSide(false); // auto close on click
                  }}
                  className={`text-[16px] font-[500] cursor-pointer ${
                    open === index ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-700"
                  }`}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={()=>navigate("/services/getaquote")}
                className="bg-[#873AA7] cursor-pointer py-2 px-5 rounded-full text-white text-[14px] font-[600]"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Overlay */}
          {openSide && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-30"
              onClick={() => setOpenSide(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
