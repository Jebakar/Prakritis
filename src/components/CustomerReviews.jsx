import React, { useEffect } from "react";
import review1 from "../Images/review1.png";
import review2 from "../Images/review2.png";
import review3 from "../Images/review3.png";
import review4 from "../Images/review4.png";
import review5 from "../Images/review5.png";
import review6 from "../Images/review6.png";
import star from "../Images/star.svg";

const slides = [
  { id: "slide1", image: review1, name: "Mohan Balagopal", date: "2022-05-24", content: "Good place for quality Ayurvedic medicine." },
  { id: "slide2", image: review2, name: "Partha Sarathy", date: "2022-05-16", content: "Good hospitality" },
  { id: "slide3", image: review3, name: "Aneesh Deepak", date: "2022-02-19", content: "Excellent service and value for money" },
  { id: "slide4", image: review4, name: "Sivaganesh Rajagopal", date: "2022-01-22", content: "Great Doctor, wonderful and warm experience from start to finish." },
  { id: "slide5", image: review5, name: "Sijo Thomas", date: "2022-07-24", content: "Very good treatment 👍👍👍" },
  { id: "slide6", image: review6, name: "Crazyy Ind", date: "2022-12-31", content: "Good Ayurveda clinic" },
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
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">Customer Reviews</h2>
      </div>

      <div
        className="swiffy-slider slider-nav-autoplay slider-nav-visible slider-nav-outside slider-indicators-round slider-nav-animation slider-nav-animation-fadein"
        style={{ "--swiffy-slider-nav-light": "#fff" }}
      >
        <ul className="slider-container">
          {slideGroups.map((group, idx) => (
            <li key={idx}>
              <div className="flex flex-wrap justify-center gap-4">
                {group.map((slide) => (
                  <div key={slide.id} className="w-full md:w-1/3 px-2">
                    <div className="p-4 bg-gray-50 border text-center rounded shadow">
                      <img
                        src={slide.image}
                        alt={`Review from ${slide.name}`}
                        className="mx-auto rounded max-h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="mt-3">
                        <div className="font-bold">{slide.name}</div>
                        <div className="text-gray-500 text-sm">{slide.date}</div>

                        <div className="mt-2 flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <img
                              key={i}
                              className="mx-0.5"
                              src={star}
                              alt="star"
                              width="17"
                              height="17"
                              loading="lazy"
                            />
                          ))}
                        </div>
                        <p className="mt-2 text-gray-700 text-sm">
                          {slide.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <button type="button" className="slider-nav"></button>
        <button type="button" className="slider-nav slider-nav-next"></button>

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
