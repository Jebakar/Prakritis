import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import life from "../Images/life.jpg"

const LifestyleConsultation = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold border" style={{fontFamily:"'Brygada 1918',serif", fontSize:"48px"}}>Lifestyle Consultation</h2>
        </div>

        {/* Content Section */}
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-md-6">
            <p className="mt-5" style={{marginTop:"20px"}}>
              Sujatha Ramachandran is the founder partner of Prakriti Ayurveda.
              She has pursued her study of Ayurveda both academically and
              otherwise, and has an experience of two decades of authentic
              Ayurvedic practices. She has been conducting workshops and
              interactive sessions on the science of Ayurveda both to
              organisations like the rotary, as well as in the corporate world.
              The list is extensive and includes companies like, L&amp;T, Tubes
              India, TCS, and so on.
            </p>
            <p>
              Prakriti is now happy to announce that she will be holding
              lifestyle consultations which will help identify the right
              treatments for those with health issues, correction with the
              appropriate lifestyle and dietetics, preventive steps that can be
              applied taking into consideration the ailments one is prone to,
              as well as simple exercises, postures and breathing techniques
              depending on the needs of the care seeker.
            </p>
            <p>
              You may consult her with prior appointment <strong>@ R.A Puram</strong> on
              Saturday evening and Sunday morning, and <strong>@ Anna Nagar</strong> on
              Sunday evening.
              <br />
              <strong>For appointments:</strong> 944492464 / 86800 01020 <br />
              <strong>Duration:</strong> 45 Minutes
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 text-center">
            <img
              src={life}
              alt="Prakriti Ayurveda"
              className="img-fluid rounded shadow"
              width="588"
              height="385"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleConsultation;
