import React from "react";
import member1 from "../Images/member1.jpg";
import member2 from "../Images/member2.jpg";
import member3 from "../Images/member3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";


const teamMembers = [
  {
    name: "Sujatha Ramachandran",
    designation: "Founder",
    img: member1,
  },
  {
    name: "Dr. Monica Chitnavis",
    designation: "Ayurveda Doctor",
    img: member2,
  },
  {
    name: "Dr. Divya P S",
    designation: "Ayurveda Doctor",
    img: member3,
  },
];

const Team = () => {
  return (
    <section className="team-section py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card team-card h-100 text-center shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top team-img"
                />
                <div className="card-body team-content">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="text-primary fw-semibold">{member.designation}</p>

                  {/* Social Icons */}
                  <div className="profile-footer mt-3">
                    <ul className="list-inline ekit-team-social-list mb-0">
                      <li className="list-inline-item mx-1">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-1">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-1">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-1">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Social Icons */}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
