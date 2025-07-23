import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import male from "../Images/MaleAvatar.jpg";
import female from "../Images/FemaleAvatar.png";
// Sample data
const placeData = [
  {
    name: "Male",
    image: male,
    route: "/Gender/kerala",
  },
  {
    name: "Female",
    image: female,
    route: "/Gender/himalaya",
  },

];

const Gender = () => {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <h1 className="text-center my-5 text-green-500">Explore Our Wellness Retreats</h1>
      <div className="row">
        {placeData.map((place, index) => (
          <motion.div
            key={index}
            className="flex-1  justify-center items-center m-4  cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(place.route)}
          >
            <div className="card h-100 rounded-xl duration-300 hover:rotate-3 hover:shadow-lg">
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

export default Gender;
