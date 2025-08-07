// src/components/Whatsapp.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiChatNewLine } from "react-icons/ri";

const Whatsapp = ({
  phone = "919876543210",
  message = "Hello! I'd like to know more about your Ayurveda services.",
  pulse = true,
  showText = true,
  showOnScroll = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

  useEffect(() => {
    if (!showOnScroll) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll]);

  return (
    <div className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${isHovered ? 'scale-110 shadow-xl' : 'scale-100'} group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pulse animation (optional) */}
        {pulse && (
          <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 group-hover:bg-[#128C7E]"></span>
        )}
        
        {/* Main icon */}
        <FaWhatsapp className="text-2xl md:text-3xl relative z-10" />
        
        {/* Floating text on hover */}
        {showText && (
          <span className={`absolute right-full mr-3 px-3 py-2 rounded-lg bg-white text-gray-800 text-sm font-medium shadow-md whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
            Chat with us
            <RiChatNewLine className="ml-1 inline" />
          </span>
        )}
        
        {/* Mobile badge */}
        <span className="md:hidden absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
          !
        </span>
      </a>
      
      {/* Optional floating action text (alternative to hover) */}
      {showText && (
        <div className="hidden md:block mt-2 text-center">
          <span className="inline-block bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded shadow-sm">
            Need help?
          </span>
        </div>
      )}
    </div>
  );
};

export default Whatsapp;