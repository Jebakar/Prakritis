import React from "react";
import Header from "./Header";



const Serviceshead = () => {
  return (
    <section className="elementor-section py-2 serimg" style={{ backgroundSize: 'cover' }}>
      <div className="elementor-container container">
        <div className="elementor-row row justify-content-center text-center">
          <div
            className="elementor-column elementor-col-100 col-md-8"
            style={{
              padding: "100px 0",
              fontFamily: "'Brygada 1918', serif",
              fontSize: "48px",
            }}
          >
            <div className="elementor-widget-wrap">
              <div className="elementor-element elementor-widget-heading mb-2">
                <h6 className="elementor-heading-title text-uppercase text-white">
                  What we offer
                </h6>
              </div>
              <div className="elementor-element elementor-widget-heading">
                <h1
                  className="elementor-heading-title display-5 fw-bold text-white"
                  style={{
                    fontSize: "88px",
                    fontFamily: "'Brygada 1918', serif",
                  }}
                >
                  Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Serviceshead;
