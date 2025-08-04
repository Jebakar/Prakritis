import React from "react";
import banner1 from "../Images/banner-01-cropped.jpg";
import banner2 from "../Images/banner-02.png";
import banner3 from "../Images/banner-03.png";
import banner4 from "../Images/banner-04.jpg";
import banner5 from  "../Images/Banner-05.jpg";
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
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>

          {/* Carousel Slides */}
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
                  overflow:"hidden"
                }}
              >
                <div
                  className="carousel-overlay"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="swiper-slide-contents  animated zoomIn"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "white",
                    textAlign: "center",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="elementor-slide-heading eb-garamond" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                    Welcome To Prakriti Ayurveda
                  </div>
                  <div className="elementor-slide-description" style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
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
                style={{
                  backgroundImage: `url(${banner2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "70vh",
                   overflow:"hidden"
                }}
              >
                <div
                  className="carousel-overlay"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="swiper-slide-contents animated zoomIn"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "white",
                    textAlign: "center",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="elementor-slide-heading eb-garamond" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                  Abhyangam
                  </div>
                  <div className="elementor-slide-description" style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
                    Basic ayurvedic synchronized massage using medicated oil infused with essence of <br /> 46 herbs specially formulated for prakriti clients.                   
                  </div>
                  <a href="/Booking" className="btn btn-light bg-transparent text-white ">
                   Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div
                className="carousel-background position-relative"
                style={{
                  backgroundImage: `url(${banner3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "70vh",
                   overflow:"hidden"
                }}
              >
                <div
                  className="carousel-overlay"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="swiper-slide-contents animated zoomIn"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "white",
                    textAlign: "center",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="elementor-slide-heading eb-garamond" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                    Abhyanga with Sirodhara
                  </div>
                  <div className="elementor-slide-description" style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
                    Dhara - Dripping of fluids in a rhythmic way on the forehead is done after Abhyanga, <br /> the nervous system is calmed and strengthened. 
                  </div>
                  <a href="/Booking" className="btn btn-light bg-transparent text-white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <div
                className="carousel-background position-relative"
                style={{
                  backgroundImage: `url(${banner4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "70vh",
                   overflow:"hidden"
                }}
              >
                <div
                  className="carousel-overlay"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="swiper-slide-contents animated zoomIn"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "white",
                    textAlign: "center",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="elementor-slide-heading" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                   
                  </div>
                  <div className="elementor-slide-description" style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
                    
                  </div>
                  {/* <a href="#" className="btn btn-light">
                  
                  </a> */}
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div className="carousel-item">
              <div
                className="carousel-background position-relative"
                style={{
                  backgroundImage: `url(${banner5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "70vh",
                   overflow:"hidden"
                }}
              >
                <div
                  className="carousel-overlay"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="swiper-slide-contents animated zoomIn"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "white",
                    textAlign: "center",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="elementor-slide-heading" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                    
                  </div>
                  <div className="elementor-slide-description" style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
                    
                  </div>
                  {/* <a href="#" className="btn btn-light">
                    
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
