import { div } from "framer-motion/client";
import Contacthead from "../components/Contacthead";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Galleryhead from "../components/Galleryhead";

function Contact (){
    return(
        <div>
           
            <Galleryhead item="Location" item2="We are Here" />
            <Header />
            <ContactSection />
            <MapSection />
            <Footer />
        </div>
    )
}
export default Contact;