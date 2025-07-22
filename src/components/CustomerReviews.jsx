import React, { useEffect } from "react";
import review1 from "../Images/review1.png";
import review2 from "../Images/review2.png";
import review3 from "../Images/review3.png";
import review4 from "../Images/review4.png";
import review5 from "../Images/review5.png";
import review6 from "../Images/review6.png";
import star from "../Images/star.svg"; // Your custom star image

const slides = [
  { id: "slide1", image: review1, name: "Mohan Balagopal", date: "2022-05-24" ,content :"Good place for quality Ayurvedic medicine." },
  { id: "slide2", image: review2, name: "Partha Sarathy", date: "2022-05-16",content :"Good hospitality" },
  { id: "slide3", image: review3, name: "Aneesh Deepak", date: "2022-02-19" , content :"Excellent service and value for money" },
  { id: "slide4", image: review4, name: "Sivaganesh Rajagopal", date: "2022-01-22" ,content :"Great Doctor, wonderful and warm experience from start to finish." },
  { id: "slide5", image: review5, name: "Sijo Thomas", date: "2022-07-24" },
  { id: "slide6", image: review6, name: "Crazyy Ind", date: "2022-12-31" },
];

const groupSlides = (slides, chunkSize = 3) => { 
  const groups = [];
  for (let i = 0; i < slides.length; i += chunkSize) {
    groups.push(slides.slice(i, i + chunkSize));
  }
  return groups;
};

const CustomerReviews = () => {
  const slideGroups = groupSlides(slides, 3);

  useEffect(() => {
    if (window.swiffyslider) {
      window.swiffyslider.init();
    }
  }, []);

  return (
    <div className="container py-5">
      {/* Customer Reviews Heading */}
      <div className="elementor-element elementor-element-594c486 elementor-widget elementor-widget-heading" data-id="594c486" data-element_type="widget" data-widget_type="heading.default">
        <div className="elementor-widget-container text-center mb-4">
          <h2 className="elementor-heading-title elementor-size-default">
            Customer Reviews
          </h2>
        </div>
      </div>

      {/* Review Slider */}
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
                    <div className="p-3 bg-light border text-center rounded">
                      <img
                        src={slide.image}
                        alt={slide.id}
                        className="img-fluid rounded"
                        style={{ maxHeight: "200px" }}
                      />
                      <div className="ti-profile-details mt-3">
                        <div className="ti-name fw-bold">{slide.name}</div>
                        <div className="ti-date text-muted" style={{ fontSize: "14px" }}>
                          {slide.date}
                        </div>

                        {/* Stars & Verification below the date */}
                        <div className="mt-2">
                          <div className="ti-stars">
                            {[...Array(5)].map((_, i) => (
                              <img
                                key={i}
                                className="ti-star mx-1"
                                src={star} // Custom star image
                                alt="star"
                                width="17"
                                height="17"
                                loading="lazy"
                              />
                            ))}
                          </div>
                          <div className="ti-verified-review ti-verified-platform mt-1">
                            <span
                              className="ti-verified-tooltip"
                              style={{ width: "195px" }}
                            >
                              Trustindex verifies that the original source of the review is Google.
                            </span>
                          </div>
                        </div>
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
    </div>
  );
};

export default CustomerReviews;
