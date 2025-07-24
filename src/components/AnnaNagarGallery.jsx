import React from "react";

import annanagar1 from "../Images/annanagar1.jpg"
import annanagar2 from "../Images/annanagar2.jpg"
import annanagar3 from "../Images/annanagar3.jpg"
import annanagar4 from "../Images/annanagar4.jpg"
import annanagar5 from "../Images/annanagar5.jpg"
import annanagar6 from "../Images/annanagar6.jpg"
const annaNagarImages = [
    annanagar1,
    annanagar2,
    annanagar3,
    annanagar4,
    annanagar5,
    annanagar6
 
];

const AnnaNagarGallery = () => {
  return (
    <section className="anna-nagar-gallery py-5">
      <div className="container">
        <h4 className="mb-4">Anna Nagar</h4>
        <div className="row">
          {annaNagarImages.map((imgUrl, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <a
                href={imgUrl}
                data-elementor-open-lightbox="yes"
                data-elementor-lightbox-slideshow="anna-nagar-gallery"
                data-elementor-lightbox-title={`gallery-${16 + index}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={imgUrl}
                  alt={`Anna Nagar Gallery ${index + 1}`}
                  className="img-fluid rounded shadow-sm"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default AnnaNagarGallery;
