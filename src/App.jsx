import { useState } from 'react'
import './App.css'
import "animate.css";
import Header from './Header'
import { Navbar } from 'react-bootstrap'
import Navbars from './Navbar'
import Banner from './Banner'
import PrakritiIntroSection from './Welcome'
import About from './About';
import Services from './Services';
import AppointmentSection from './Appointment';
import CustomerReviews from './CustomerReviews';

function App() {


  return (
    <>
    {/* <Header /> */}
    <Navbars />
    <Banner />
    <Header />
    <PrakritiIntroSection />
    <About />
    <Services />
    <AppointmentSection />
    <CustomerReviews />
   
    </>
  )
}

export default App
