import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const navigationLinks = [
    'Home',
    'Introduction', 
    'Demo',
    'Clients',
    'Contact'
  ];

  return (
    <footer className=" bg-[#ffffff0f] mt-32 text-white md:relative">
         <div className=' w-[100%] md:block hidden  h-[450px] bg-[#56035d43] blur-2xl rounded-full'>
            </div>
      <div className="w-[100%] mx-auto px-6 py-12 md:absolute top-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80%] mx-auto">
          
          {/* Sundus Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Verbalizers</h2>
            <p className="text-white leading-relaxed text-sm">
      At Verbalizers, we believe language should never stand in the way of connection. Every story deserves to be heard the way it was meant to be told.
We help your words travel across languages and cultures, so no meaning is lost and every voice finds connection.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Navigation Pages</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                         to={link}
                smooth={true}
                duration={500}
                offset={-90}
                key={index}
                    className="text-white cursor-pointer transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-white">
                  <span className="font-semibold text-white">Techsquare Solutions,</span> 1st Floor, Building 
                  128, Innovation Park, Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-white flex-shrink-0" />
              <a 
                href="tel:+923123456789" 
                className="text-white transition-colors text-sm"
              >
                +92 312 3456789
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-white flex-shrink-0" />
              <a 
                href="mailto:hello@techsquare.com" 
                className="text-white transition-colors text-sm"
              >
                hello@techsquare.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white w-[80%] mx-auto mt-12 pt-6 text-center">
          <p className="text-white text-sm">
            © 2025 Verbalizers. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;