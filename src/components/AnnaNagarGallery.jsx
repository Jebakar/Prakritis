import React from "react";

const annaNagarImages = [
  "https://prakritiayurveda.com/wp-content/uploads/2022/12/gallery-16.jpg",
  "https://prakritiayurveda.com/wp-content/uploads/2022/12/gallery-17.jpg",
  "https://prakritiayurveda.com/wp-content/uploads/2022/12/gallery-12.jpg",
  "https://prakritiayurveda.com/wp-content/uploads/2022/12/gallery-13.jpg",
  "https://prakritiayurveda.com/wp-content/uploads/2022/12/gallery-14.jpg",
  "https://prakritiayurveda.com/wp-content/uploads/2022/12/gallery-15.jpg"
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
