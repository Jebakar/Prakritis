import { div } from "framer-motion/client"
import React from "react"
import Ourteam from "../components/Ourteam"
import Team from "../components/Teammembers"
import Footer from "../components/Footer"

function Ourteampage(){
    return(
          <div>
            <Ourteam />
            <Team />
            <Footer />
          </div>
    
    )
}
export default Ourteampage