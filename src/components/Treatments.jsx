import React from "react";

import special1 from "../Images/special1.jpg";
import special2 from "../Images/special2.jpg";
import special3 from "../Images/special3.jpg";
import special4 from "../Images/special4.jpg";
import special5 from "../Images/special5.jpg";
import special6 from "../Images/special6.jpg";
import special7 from "../Images/special7.jpg";
import special8 from "../Images/special8.jpg";
import special9 from "../Images/special9.jpg";
import special10 from "../Images/special10.jpg";
import special11 from "../Images/special11.jpg";
import special12 from "../Images/special12.jpg";
import special13 from "../Images/special13.jpg";
import special14 from "../Images/special14.jpg";

const treatments = [
  {
    title: "Low back pain (Lumbar spondylosis)",
    image: special1
  },
  {
    title: "Neck pain (Cervical spondylosis)",
    image: special2
  },
  {
    title: "Joint pain",
    image: special3
  },
  {
    title: "Skin Diseases",
    image: special4
  },
  {
    title: "Hairfall",
    image: special5
  },
  {
    title: "Digestive tract diseases",
    image: special6
  },
  {
    title: "Diabetes",
    image: special7
  },
  {
    title: "Obesity",
    image: special8
  },
  {
    title: "Migraine",
    image: special9
  },
  {
    title: "Sinusitis",
    image: special10
  },
  {
    title: "Gynecological disorders",
    image: special11
  },
  {
    title: "Neuromuscular disorders",
    image: special12
  },
  {
    title: "Sleep Disorders",
    image: special13
  },
  {
    title: "Psychological & psychiatric disorders",
    image: special14
  },
];

const SpecialTreatments = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 border" style={{ fontSize: "48px", fontFamily: "'Brygada 1918', serif" }}>
          Special Treatments
        </h2>
        <div className="row mt-5">
          {treatments.map((treatment, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card treatment-card h-100 shadow-sm">
                <img
                  src={treatment.image}
                  className="card-img-top treatment-img"
                  alt={treatment.title}
                  loading="lazy"
                />
                <div className="card-body">
                  <p className="card-title fw-bold treatment-title">{treatment.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialTreatments;
