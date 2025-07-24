import { div } from "framer-motion/client";
import GalleryHeading from "../components/Galleryhead";
import Galleryimages from "../components/Galleryimages";
import AnnaNagarGallery from "../components/AnnaNagarGallery";
import RAPuramGallery from "../components/RAPuramGallery";
import React from "react";
import Footer from "../components/Footer";
function Gallery (){
    return(
        <div>
            <GalleryHeading />
            <Galleryimages />
            <AnnaNagarGallery />
            <RAPuramGallery />
            <Footer />
            
        </div>
    )
}
export default Gallery