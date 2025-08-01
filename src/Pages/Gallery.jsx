import { div } from "framer-motion/client";
import GalleryHeading from "../components/Galleryhead";
import Galleryimages from "../components/Galleryimages";
import AnnaNagarGallery from "../components/AnnaNagarGallery";
import RAPuramGallery from "../components/RAPuramGallery";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Galleryhead from "../components/Galleryhead";
function Gallery (){
    return(
        <div>
            <Galleryhead item="Gallery" item2="Explore Here" />
             <Header/>
            <Galleryimages />
            <AnnaNagarGallery />
            <RAPuramGallery />
            <Footer />
            
        </div>
    )
}
export default Gallery