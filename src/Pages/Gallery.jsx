import React, { useEffect } from "react";
import Galleryhead from "../components/Galleryhead";
import Galleryimages from "../components/Galleryimages";
import AnnaNagarGallery from "../components/AnnaNagarGallery";
import RAPuramGallery from "../components/RAPuramGallery";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light">
          <div data-aos="fade-down">
        <Header />
        {/* <Galleryhead item="Gallery" item2="Explore Here" /> */}
      
      </div>
      {/* Header and Page Title */}
      <div data-aos="fade-down">
        
        <Galleryhead item="Gallery" item2="Explore Here" />
      
      </div>

      {/* Image Section */}
      <section className="container " data-aos="fade-up">
        <Galleryimages />
      </section>

      {/* Anna Nagar Gallery */}
      <section className="bg-gray-100 py-5" data-aos="fade-right">
        <AnnaNagarGallery />
      </section>

      {/* RA Puram Gallery */}
      <section className="container py-5" data-aos="fade-left">
        <RAPuramGallery />
      </section>

    
    </div>
  );
}

export default Gallery;
