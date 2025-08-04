import React, { useEffect } from "react";
import Ourteam from "../components/Ourteam";
import Team from "../components/Teammembers";
import Footer from "../components/Footer";
import Galleryhead from "../components/Galleryhead";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Ourteampage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light">
      {/* Header */}
      <div data-aos="fade-down">
        <Header />
      </div>

      {/* Heading Section */}
      <div data-aos="fade-up">
        <Galleryhead item="Our Team" item2="Meet Our Experts" />
      </div>

      {/* Team Members Section */}
      <section className="container py-5" data-aos="fade-up">
        <Team />
      </section>

      {/* Footer */}
      <div data-aos="fade-up" data-aos-delay="100">
        <Footer />
      </div>
    </div>
  );
}

export default Ourteampage;
