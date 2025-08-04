import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PrakritiIntroSection from '../components/Welcome'
import About from '../components/About'
import AppointmentSection from '../components/Appointment'
import CustomerReviews from '../components/CustomerReviews'
import Services from '../components/Services'
import IMages from '../components/images'
import Footer from '../components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light">
      <div data-aos="fade-in"><Banner /></div>
      <Header /> {/* Usually fixed, no animation */}

      <div data-aos="fade-up"><PrakritiIntroSection/></div>
      <div data-aos="fade-right"><About /></div>
      <div data-aos="zoom-in"><Services /></div>
      <div data-aos="fade-left"><AppointmentSection /></div>
      <div data-aos="fade-up"><CustomerReviews /></div>
      <div data-aos="zoom-in-up"><IMages /></div>
      <Footer />
    </div>
  );
};
export default Home;