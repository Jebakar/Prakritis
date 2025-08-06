// src/components/Whatsapp.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = ({
  phone = "919876543210",
  message = "Hello! I’d like to know more about your Ayurveda services.",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 flex items-center space-x-2"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:inline text-base font-medium">Chat with us</span>

    </a>
  );
};

export default Whatsapp;
