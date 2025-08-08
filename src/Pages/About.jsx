import React, { useEffect } from "react";
import Aboutushead from "../components/Aboutushead";
import AryaVaidyaSala from "../components/ARYA";
import Footer from "../components/Footer";
import Galleryhead from "../components/Galleryhead";
import Header from "../components/Header";
import PrakritiUSP from "../components/PRAKRITI";
import Swasthasya from "../components/Swasthasya";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutpage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light overflow-x-hidden">
      <div data-aos="fade-down">
        <Header />
      </div>

      <div data-aos="zoom" className="bg-gray-100">
        <Galleryhead item="About Us" item2="Know More About Us" />
      </div>

      <div data-aos="fade-up" className="container py-4  ">
        <Swasthasya />
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className=" py-4 bg-gray-100">
        <PrakritiUSP />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="container py-4 bg-light">
        <AryaVaidyaSala />
      </div>

    
    </div>
  );
}

export default Aboutpage;
