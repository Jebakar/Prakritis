import React, { useEffect } from "react";
import Serviceshead from "../components/Serviceshead";
import AyurvedaTherapies from "../components/AyurvedaTherapies";
import SpecialTreatments from "../components/Treatments";
import LifestyleConsultation from "../components/LifestyleConsultation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light">
      {/* Header */}
      <div data-aos="fade-down">
        <Header />
      </div>

      {/* Page Title Section */}
      <div data-aos="zoom-in">
        <Serviceshead />
      </div>

      {/* Ayurveda Therapies */}
      <section className="container py-5" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-center fw-bold mb-4 text-success">Ayurveda Therapies</h2>
        <AyurvedaTherapies />
      </section>

      {/* Special Treatments */}
      <section className="container py-5" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-center fw-bold mb-4 text-primary">Special Treatments</h2>
        <SpecialTreatments />
      </section>

      {/* Lifestyle Consultation */}
      <section className="container py-5" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-center fw-bold mb-4 text-warning">Lifestyle Consultation</h2>
        <LifestyleConsultation />
      </section>
    </div>
  );
}

export default Services;
