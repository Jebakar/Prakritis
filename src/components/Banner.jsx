import React from "react";
import banner1 from "../Images/banner-01-cropped.jpg";
import banner2 from "../Images/banner-02.png";
import banner3 from "../Images/banner-03.png";
import banner4 from "../Images/banner-04.jpg";
import banner5 from "../Images/Banner-05.jpg";
import "animate.css";

function Banner() {
  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade p-0"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === 0 ? "true" : undefined}
              />
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div
                className="carousel-background position-relative"
                style={{
                  backgroundImage: `url(${banner1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "70vh",
                  overflow: "hidden",
                }}
              >
                <div className="carousel-overlay" style={overlayStyle}></div>
                <div className="swiper-slide-contents animated zoomIn" style={slideContentStyle}>
                  <div className="elementor-slide-heading eb-garamond" style={headingStyle}>
                    Welcome To Prakriti Ayurveda
                  </div>
                  <div className="elementor-slide-description" style={descriptionStyle}>
                    "We are authorized dealers of medicines of Kottakkal Arya Vaidya Sala"
                  </div>
                  <a href="/Booking" className="btn btn-light bg-transparent text-white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div
                className="carousel-background position-relative"
                style={slideBackgroundStyle(banner2)}
              >
                <div className="carousel-overlay" style={overlayStyle}></div>
                <div className="swiper-slide-contents animated zoomIn" style={slideContentStyle}>
                  <div className="elementor-slide-heading eb-garamond" style={headingStyle}>
                    Abhyangam
                  </div>
                  <div className="elementor-slide-description" style={descriptionStyle}>
                    Basic ayurvedic synchronized massage using medicated oil infused with essence
                    of <br /> 46 herbs specially formulated for prakriti clients.
                  </div>
                  <a href="/Booking" className="btn btn-light bg-transparent text-white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div
                className="carousel-background position-relative"
                style={slideBackgroundStyle(banner3)}
              >
                <div className="carousel-overlay" style={overlayStyle}></div>
                <div className="swiper-slide-contents animated zoomIn" style={slideContentStyle}>
                  <div className="elementor-slide-heading eb-garamond" style={headingStyle}>
                    Abhyanga with Sirodhara
                  </div>
                  <div className="elementor-slide-description" style={descriptionStyle}>
                    Dhara - Dripping of fluids in a rhythmic way on the forehead is done after
                    Abhyanga, <br /> the nervous system is calmed and strengthened.
                  </div>
                  <a href="/Booking" className="btn btn-light bg-transparent text-white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <div className="carousel-background position-relative" style={slideBackgroundStyle(banner4)}>
                <div className="carousel-overlay" style={overlayStyle}></div>
                <div className="swiper-slide-contents animated zoomIn" style={slideContentStyle}>
                  <div className="elementor-slide-heading eb-garamond" style={headingStyle}></div>
                  <div className="elementor-slide-description" style={descriptionStyle}></div>
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div className="carousel-item">
              <div className="carousel-background position-relative" style={slideBackgroundStyle(banner5)}>
                <div className="carousel-overlay" style={overlayStyle}></div>
                <div className="swiper-slide-contents animated zoomIn" style={slideContentStyle}>
                  <div className="elementor-slide-heading eb-garamond" style={headingStyle}></div>
                  <div className="elementor-slide-description" style={descriptionStyle}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1,
};

const slideContentStyle = {
  position: "relative",
  zIndex: 2,
  color: "white",
  textAlign: "center",
  top: "50%",
  transform: "translateY(-50%)",
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  fontFamily: '"Brygada 1918", serif',
};

const descriptionStyle = {
  fontSize: "1.2rem",
  margin: "1rem 0",
  fontFamily: '"Brygada 1918", serif',
};

const slideBackgroundStyle = (banner) => ({
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "70vh",
  overflow: "hidden",
});

export default Banner;
