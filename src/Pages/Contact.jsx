import { div } from "framer-motion/client";
import Contacthead from "../components/Contacthead";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

function Contact (){
    return(
        <div>
            <Contacthead />
            <ContactSection />
            <MapSection />
            <Footer />
        </div>
    )
}
export default Contact;