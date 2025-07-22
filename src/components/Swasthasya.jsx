import React from "react";
import bsservice from "../Images/bs-service-image.jpg"

function Swasthasya() {
  return (
    <section className="section-wrapper">
      <div className="row ms-5">
        {/* Left Column */}
        <div className="col left-col ">
          <h4 className="sanskrit-quote">
            "Swasthasya Swasthya Rakshanam Aturasya Vikara Prasamanam"
          </h4>

          {/* Icon */}
          <div className="icon-wrapper">
            <svg xmlns="" width="24" height="24" fill="#205B4F" viewBox="0 0 24 24">
              <path d="M5.56401 24C3.79239 24 ... 24Z" />
            </svg>
          </div>

          {/* Description */}
          <p className="description">
            Protect the health of the healthy and relieve the ‘disease’ of the ailing is the fundamental motto of the life science that is Ayurveda. It is with this philosophy that “PRAKRITI AYURVEDA” was established in Chennai twenty two years ago in 2000. Today, Prakriti has three centers in the city of Chennai - Tamilnadu, India.
          </p>
        </div>

        {/* Right Column */}
        <div className="col right-col">
          <img
            src={bsservice}
            alt="Ayurveda Service"
            className="responsive-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Swasthasya;
