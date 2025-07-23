import React from "react";

import gallery1 from "../Images/gallery1.jpg";
import gallery2 from "../Images/gallery2.jpg";
import gallery3 from "../Images/gallery3.jpg";
import gallery4 from "../Images/gallery4.jpg";
import gallery5 from "../Images/gallery5.jpg";
import gallery6 from "../Images/gallery6.jpg";
import gallery7 from "../Images/gallery7.jpg";
import gallery8 from "../Images/gallery8.jpg";
import gallery9 from "../Images/gallery9.jpg";
import gallery10 from "../Images/gallery10.jpg";
import gallery11 from "../Images/gallery11.jpg";
import gallery12 from "../Images/gallery12.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12
];

const GalleryImages = () => {
  return (
    <section className="gallery-section py-5">
      <div className="container">
        <div className="row">
          {images.map((imgUrl, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <a href={imgUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={imgUrl}
                  alt={`gallery-${index + 1}`}
                  className="img-fluid rounded shadow-sm"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryImages;
