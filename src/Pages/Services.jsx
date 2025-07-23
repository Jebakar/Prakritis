import { div } from "framer-motion/client";
import Serviceshead from "../components/Serviceshead";
import AyurvedaTherapies from "../components/AyurvedaTherapies";
import SpecialTreatments from "../components/Treatments";
import LifestyleConsultation from "../components/LifestyleConsultation";
import React from "react";
import Footer from "../components/Footer";
function Services (){
    return(
        <div>
            <Serviceshead />
            <AyurvedaTherapies />
            <SpecialTreatments />
            <LifestyleConsultation />
            <Footer />
        </div>

    )
}
export default Services;