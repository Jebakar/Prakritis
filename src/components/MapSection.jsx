import React from "react";

const MapSection = () => {
  return (
    <section
      className="elementor-section py-3"
      style={{ width: "100%", backgroundColor: "#f5f5f5" }}
    >
      <div className="container-fluid p-0">
        <div className="elementor-widget-wrap">
          <div className="elementor-widget-container">
            <div className="elementor-custom-embed" style={{ height: "500px" }}>
              <iframe
                loading="lazy"
                title="Prakriti Ayurvedic Centre Map"
                src="https://maps.google.com/maps?q=Prakriti%20Ayurvedic%20Centre%2C%20A%20BLOCK%205th%20St%2C%20A%20J%20Block%2C%20Block%20AJ%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
