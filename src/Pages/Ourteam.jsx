import { div } from "framer-motion/client"
import React from "react"
import Ourteam from "../components/Ourteam"
import Team from "../components/Teammembers"
import Footer from "../components/Footer"
import Gallery from "./Gallery"
import Galleryhead from "../components/Galleryhead"
import Header from "../components/Header"

function Ourteampage(){
    return(
          <div>
           <Galleryhead item="Our Team" item2="Meet Our Experts" />
           <Header/>
            <Team />
            <Footer />
          </div>
    
    )
}
export default Ourteampage