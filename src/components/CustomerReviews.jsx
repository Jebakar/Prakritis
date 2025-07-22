import React, { useEffect } from "react";
import review1 from "../Images/review1.png";
import review2 from "../Images/review2.png";
import review3 from "../Images/review3.png";
import review4 from "../Images/review4.png";
import review5 from "../Images/review5.png";
import review6 from "../Images/review6.png";

const slides = [
  { id: "slide1", image: review1, name: "Crazyy Ind", date: "2022-07-31" },
  { id: "slide2", image: review2, name: "Mild Mind", date: "2022-08-15" },
  { id: "slide3", image: review3, name: "Zen Pro", date: "2022-09-01" },
  { id: "slide4", image: review4, name: "Herbal Queen", date: "2022-10-10" },
  { id: "slide5", image: review5, name: "Dr. Peace", date: "2022-11-25" },
  { id: "slide6", image: review6, name: "Ayur Guru", date: "2022-12-31" },
];

const groupSlides = (slides, chunkSize = 3) => {
  const groups = [];
  for (let i = 0; i < slides.length; i += chunkSize) {
    groups.push(slides.slice(i, i + chunkSize));
  }
  return groups;
};

const Review = () => {
  const slideGroups = groupSlides(slides, 3);

  useEffect(() => {
    if (window.swiffyslider) {
      window.swiffyslider.init();
    }
  }, []);

  return (
    <div
      className="swiffy-slider slider-nav-autoplay slider-nav-visible slider-nav-outside slider-indicators-round slider-nav-animation slider-nav-animation-fadein"
      style={{ "--swiffy-slider-nav-light": "#fff" }}
    >
      <ul className="slider-container">
        {slideGroups.map((group, idx) => (
          <li key={idx}>
            <div className="row">
              {group.map((slide) => (
                <div key={slide.id} className="col-md-4">
                  <div className="p-3 bg-light border text-center">
                    <img
                      src={slide.image}
                      alt={slide.id}
                      className="img-fluid rounded"
                      style={{ maxHeight: "200px" }}
                    />
                    <div className="ti-profile-details mt-2">
                      <div className="ti-name fw-bold">{slide.name}</div>
                      <div className="ti-date text-muted" style={{ fontSize: "14px" }}>
                        {slide.date}
                      </div>
                      <span className="ti-stars d-inline-block mt-1">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            className="ti-star mx-1"
                            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                            alt="Google Star"
                            width="17"
                            height="17"
                            loading="lazy"
                          />
                        ))}
                        <span className="ti-verified-review ti-verified-platform">
                          <span
                            className="ti-verified-tooltip"
                            style={{ width: "195px" }}
                          >
                            Trustindex verifies that the original source of the
                            review is Google.
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <button type="button" className="slider-nav"></button>
      <button type="button" className="slider-nav slider-nav-next"></button>

      {/* Indicators */}
      <ul className="slider-indicators">
        {slideGroups.map((_, index) => (
          <li key={index} className={index === 0 ? "active" : ""}></li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
