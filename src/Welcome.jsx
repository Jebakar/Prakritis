import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bs from "./Images/bs-banner-t-icon-1.png"
const PrakritiIntroSection = () => {
  return (
    <section className="py-5 bg-light text-center animate__animated animate__fadeInUp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h3 className=" welcome">Welcome to our</h3>
            <h2 className="display-5 fw-bold mb-3 eb-garamond">Prakriti Ayurveda</h2>

            <div className="mb-3">
              <img
                src={bs}
                alt="separator"
                width="169"
                height="20"
              />
            </div>

            <p className="lead text-secondary work-sans" style={{fontSize:"16px"}}>
              Protect the health of the healthy and relieve the ‘disease’ of the
              ailing is the fundamental motto of the life science that is
              Ayurveda. It is with this philosophy that “PRAKRITI AYURVEDA” was
              established in Chennai twenty two years ago in 2000.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrakritiIntroSection;
