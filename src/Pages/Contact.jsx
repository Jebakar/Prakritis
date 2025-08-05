import React, { useEffect } from "react";
import Contacthead from "../components/Contacthead";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Galleryhead from "../components/Galleryhead";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light">
            <div data-aos="fade-down">
        <Header />
      </div>
      <Galleryhead item="Location" item2="We are Here" />
  

      <section className="container ">
        <div className="row g-4">
          <div className="col-12" data-aos="fade-up">
            <ContactSection />
          </div>
          <div className="col-12" data-aos="fade-up" data-aos-delay="200">
            <MapSection />
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Contact;
