import React from "react";
import aboutImg from "../Images/About.jpg";
import what from "../Images/what we.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <>
      {/* About Us Section */}
      <div className="container py-5">
        <div className="card shadow border-0 p-4 animate__animated animate__fadeInUp">
          <div className="row align-items-center" data-aos="fade-up">
            {/* Left Side - Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="image-hover-container text-center">
                <img
                  src={aboutImg}
                  alt="About Prakriti"
                  className="img-fluid rounded zoom-image"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="col-md-6">
              <div className="card-body image-hover-container">
                <h3 className="card-title hover-change">About Us</h3>
                <p className="card-text text-secondary">
                  Ayurveda describes this positive health as a composite of
                  physiological, mental, psychological and sensual well-being —
                  thus prescribing lifestyle, dietetics as well as mental and
                  physical activities for the maintenance of positive health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="container pb-5">
        <div className="card shadow border-0 p-4 animate__animated animate__fadeInUp">
          <div className="row align-items-center" data-aos="fade-up">
            {/* Left Side - Image */}
           
            {/* Right Side - Content */}
            <div className="col-md-6">
              <div className="card-body image-hover-container">
                <h3 className="card-title hover-change">What We Do</h3>
                <p className="card-text text-secondary">
                  Ayurveda describes this positive health as a composite of
                  physiological, mental, psychological and sensual well-being —
                  thus prescribing lifestyle, dietetics as well as mental and
                  physical activities for the maintenance of positive health.
                </p>
              </div>
            </div>
             <div className="col-md-6 mb-4 mb-md-0">
              <div className="image-hover-container text-center">
                <img
                  src={what}
                  alt="What We Do"
                  className="img-fluid rounded zoom-image"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
