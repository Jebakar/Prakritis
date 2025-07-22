import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PrakritiIntroSection from '../components/Welcome'
import About from '../components/About'
import AppointmentSection from '../components/Appointment'
import CustomerReviews from '../components/CustomerReviews'
import Services from '../components/Services'
import IMages from '../components/images'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
       <Banner />
            <Header />
            <PrakritiIntroSection/>
            <About />
            <Services />
            <AppointmentSection />
            <CustomerReviews/>
            <IMages />
            <Footer /> 
        
    </div> 
  )
}

export default Home