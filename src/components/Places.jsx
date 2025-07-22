import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnnaNagar from "../Images/banner-03.png";
import RAPuram from "../Images/banner-01.jpg";
import Kattupakkam from "../Images/banner-04.jpg";

// Sample data
const placeData = [
  {
    name: "Anna Nagar",
    image: AnnaNagar,
    route: "/places/kerala",
  },
  {
    name: "RA Puram",
    image: RAPuram,
    route: "/places/himalaya",
  },
  {
    name: "Kattupakkam",
    image: Kattupakkam,
    route: "/places/beach",
  },
];

const Places = () => {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <h1 className="text-center my-5 text-green-500">Explore Our Wellness Retreats</h1>
      <div className="row">
        {placeData.map((place, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(place.route)}
          >
            <div className="card h-100">
              <img src={place.image} className="card-img-top w-[300px] h-[300px]" alt={place.name} />
              <div className="card-body">
                <h5 className="card-title text-center">{place.name}</h5>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Places;
