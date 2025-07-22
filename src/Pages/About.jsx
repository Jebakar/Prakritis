import Aboutushead from "../components/Aboutushead";
import AryaVaidyaSala from "../components/ARYA";
import Footer from "../components/Footer";
import PrakritiUSP from "../components/PRAKRITI";
import Swasthasya from "../components/Swasthasya";

function Aboutpage(){
    return(
        <div>
            <Aboutushead />
            <Swasthasya />
            <PrakritiUSP /> 
            <AryaVaidyaSala />
            <Footer /> 

        </div>
    )
}
export default Aboutpage;