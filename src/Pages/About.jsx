import Aboutushead from "../components/Aboutushead";
import AryaVaidyaSala from "../components/ARYA";
import Footer from "../components/Footer";
import Galleryhead from "../components/Galleryhead";
import Header from "../components/Header";
import PrakritiUSP from "../components/PRAKRITI";
import Swasthasya from "../components/Swasthasya";
import Gallery from "./Gallery";

function Aboutpage(){
    return(
        <div>
          <Galleryhead item="About Us" item2="Know More About Us" />
          <Header/>
            <Swasthasya />
            <PrakritiUSP /> 
            <AryaVaidyaSala />
            <Footer /> 

        </div>
    )
}
export default Aboutpage;