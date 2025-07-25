import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { useNavigate } from "react-router-dom";


import Abhyanga from "../Images/Abhyanga.jpg";
import Abhyangastream from "../Images/Abhyanga-with-Steam.jpeg";
import Abhyangasirodhara from "../Images/Abhyanga-with-Sirodhara.png";
import pada from "../Images/Pada-Abhyanga.png";
import Varnya from "../Images/Varnya.png";
import Dandruff from "../Images/Dandruff-Hairfall.png";
import HeadingIcon from "../Images/bs-banner-t-icon-1.png"; 

const treatments = [
  {
    title: "Abhyanga",
    img: Abhyanga,
    description:
      "Basic ayurvedic synchronized massage using medicated oil infused with essence of 46 herbs specially formulated for prakriti clients. It is an excellent basic detoxification regimen. Massage is followed by a bath in warm water using herbal scrub.",
    duration: "1 Hr.",
  },
  {
    title: "Abhyanga with Steam",
    img: Abhyangastream,
    description:
      "When Abhyanga is followed by steam, excessive toxins are thrown out by the sweat glands. The herbs added to the steamer works wonders on a tired body.",
    duration: "1 Hr. 15 Min.",
  },
  {
    title: "Abhyanga with Sirodhara",
    img: Abhyangasirodhara,
    description:
      "Dhara – Dripping of fluids in a rhythmic way on the forehead is done after Abhyanga, the nervous system is calmed and strengthened. This is an excellent therapy for detoxification and destress.",
    duration: "1 Hr. 30 Min.",
  },
  {
    title: "Pada Abhyanga",
    img: pada,
    description:
      "Ayurvedic massage for the feet with medicated oils for overall relaxation.",
    duration: "20 Min.",
  },
  {
    title: "Varnya",
    img: Varnya,
    description:
      "A unique Ayurvedic face care programme with its base in Shashtika panda sweda. It aids circulation, removes dead cells, improves skin texture and makes it more youthful. The after-glow will tell you how pampered the face feels.",
    duration: "45 Min.",
  },
  {
    title: "Dandruff and Hairfall",
    img: Dandruff,
    description:
      "Ayurvedic hair care involving siro abhyanga, kashaya dhara and dhoopa is very effective in scalp infection and hairfall.",
    duration: "45 Min.",
  },
];

function Services() { 
  const navigate = useNavigate();
  return ( 
    <section className="py-5 bg-light">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-5 animate__animated animate__fadeInUp">
          <h2 className="fw-bold">Services</h2>
          <div className="mt-3">
            <img
              src={HeadingIcon} 
              alt="Decorative Separator"
              width="169"
              height="20"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {treatments.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="card treatment-card h-100 border-0 shadow-sm animate__animated animate__fadeInLeft">
                <div className="img-wrapper overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top zoom-on-hover"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title hover-title">{item.title}</h4>
                  <p className="card-text">{item.description}</p>
                  <p>
                    <strong>Duration: {item.duration}</strong>
                  </p>
                  <a
                    href="/book"
                    className="btn btn-dark"
                    // target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => navigate("/book")}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
}

export default Services;
