import React from "react";

import rapuram1 from "../Images/rapuram1.jpg"
import rapuram2 from "../Images/rapuram2.jpg"
import rapuram3 from "../Images/rapuram3.jpg"
import rapuram4 from "../Images/rapuram4.jpg"
import rapuram5 from "../Images/rapuram5.jpg"
import rapuram6 from "../Images/rapuram6.jpg"
import rapuram7 from "../Images/rapuram7.jpg"
import rapuram8 from "../Images/rapuram8.jpg"
import rapuram9 from "../Images/rapuram9.jpg"
import rapuram10 from "../Images/rapuram10.jpg"
import rapuram11 from "../Images/rapuram11.jpg"
import rapuram12 from "../Images/rapuram12.jpg"
const RAPuramGallery = () => {
  const images = [
    rapuram1,
    rapuram2,
    rapuram3,
    rapuram4,
    rapuram5,
    rapuram6,
    rapuram7,
    rapuram8,
    rapuram9,
    rapuram10,
    rapuram11,
    rapuram12

  ];

  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container ">
        <h4 className="mb-4">RA Puram</h4>
        <div
          className="row"
          style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{
                flex: "1 1 calc(25% - 16px)",
                maxWidth: "calc(25% - 16px)",
                boxSizing: "border-box",
              }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`} 
                className="gallery-image"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RAPuramGallery;
