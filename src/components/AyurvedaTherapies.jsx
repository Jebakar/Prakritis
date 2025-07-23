import React from "react";

import service1 from "../Images/service1.jpg"
import service2 from "../Images/service2.jpg"
import service3 from "../Images/service3.jpg"
import service4 from "../Images/service4.jpg"
import service5 from "../Images/service5.jpg"
import service6 from "../Images/service6.jpg"
import service7 from "../Images/service7.jpg"
import service8 from "../Images/service8.jpg"
import service9 from "../Images/service9.jpg"
import service10 from "../Images/service10.jpg"
import service11 from "../Images/service11.jpg"
import service12 from "../Images/service12.jpg"
import service13 from "../Images/service13.jpg"
import service14 from "../Images/service14.jpg"
import service15 from "../Images/service15.jpg"

const therapies = [
  { title: "Abhyangam", image: service1 },
  { title: "Udwartanam", image: service2 },
  { title: "Pizhichil", image: service3 },
  { title: "Podikizhi", image: service4 },
  { title: "Elakizhi", image: service5 },
  { title: "Navarakizhi", image: service6 },
  { title: "Shirodhara", image: service7 },
  { title: "Kativasthi", image: service8 },
  { title: "Kashayavasthi & Ksheeravasthi", image: service9 },
  { title: "Nasyam", image: service10 },
  { title: "Tarpanam", image: service11 },
  { title: "Greeva Vasti", image: service12 },
  { title: "Patrapindasweda", image: service13 },
  { title: "Varnya", image: service14 },
  { title: "Pada Abhyangam", image: service15 }
];

const AyurvedaTherapies = () => {
  return (
    <div className="mt-5">
      <section className="therapies-section py-5 mt-5">
        <div className="container">
          <div className="row">
            {therapies.map((therapy, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card text-center shadow-sm h-100 therapy-card">
                  <div className="image-wrapper">
                    <img
                      src={therapy.image}
                      alt={therapy.title}
                      className="card-img-top therapy-img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title therapy-title">{therapy.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurvedaTherapies;
