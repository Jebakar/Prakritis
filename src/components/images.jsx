import React from "react";
import Lifestyle from "../Images/Lifestyle.png";
import Lifestyle2 from "../Images/branchimg.jpg"; // Make sure this image exists in the Images folder

const IMages = () => {
  return (
    <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
      {/* First Image Row */}
      <div className="row g-0">
        <div className="col-12">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-widget-container">
              <img
                src={Lifestyle}
                alt="Lifestyle Consultation"
                className="img-fluid w-100 d-block"
                loading="lazy"
                decoding="async"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Image Row */}
      <div className="row g-0 mt-3">
        <div className="col-12">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-widget-container">
              <img
                src={Lifestyle2}
                alt="Lifestyle Followup"
                className="img-fluid w-100 d-block"
                loading="lazy"
                decoding="async"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMages;
