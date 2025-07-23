import { div } from "framer-motion/client";
import GalleryHeading from "../components/Galleryhead";
import Galleryimages from "../components/Galleryimages";
import AnnaNagarGallery from "../components/AnnaNagarGallery";

function Gallery (){
    return(
        <div>
            <GalleryHeading />
            <Galleryimages />
            <AnnaNagarGallery />
        </div>
    )
}
export default Gallery