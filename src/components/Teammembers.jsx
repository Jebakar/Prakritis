import React, { useState } from "react";
import member1 from "../Images/member1.jpg";
import member2 from "../Images/member2.jpg";
import member3 from "../Images/member3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal, Button } from "react-bootstrap";

const teamMembers = [
  {
    name: "Sujatha Ramachandran",
    designation: "Founder",
    img: member1,
    description:
      "Sujatha Ramachandran is the founder of Prakriti Ayurveda. She has pursued her study of Ayurveda both academically and otherwise, and has an experience of two decades of authentic Ayurvedic practices. She has been conducting workshops and interactive sessions on the science of Ayurveda both to organisations like the rotary, as well as in the corporate world. The list is extensive and includes companies like, L&T, Tubes India, TCS, and so on. Prakriti is now happy to announce that she will be holding lifestyle consultations which will help identify the right treatments for those with health issues, correction with the appropriate lifestyle and dietetics, preventive steps that can be applied taking into consideration the ailments one is prone to, as well as simple exercises, postures and breathing techniques depending on the needs of the care seeker. You may consult her with prior appointment.",
    modalImg: "https://prakritiayurveda.com/wp-content/uploads/2022/12/Sujatha-Ramachandran.jpg",
  },
  {
    name: "Dr. Monica Chitnavis",
    designation: "Ayurveda Doctor",
    img: member2,
    description:
      "Dr Monica Chitnavis has been practising Ayurveda for the last 25 years Coming from a lineage of allopathy Doctors she has an integrative approach while treating her patients. She firmly believes that Ayurveda Yoga and lifestyle changes can give good results for a lot of ailments.",
    modalImg: member2,
  },
  {
    name: "Dr. Divya P S",
    designation: "Ayurveda Doctor",
    img: member3,
    description:
      "Dr. Divya P S is a renowned Ayurveda Doctor in Chennai, with more than 12 years of experience. She is confident in her diagnostic skills and is highly innovative in her treatment methodology. Efficiently handles all Panchakarma therapies and provides holistic cure to her patients. Dr. Divya P S is the 4th generation Ayurveda physician of the renowned Kuttan Vaidyan’s lineage from Kerala. With over a decade of dedication to the tradition of Ayurveda, Dr. Divya P S is a well sought-after Vaidya, and treats all kinds of Skin disorders, Nervous disorders, Premature grey hair & dandruff issues, Migraine, Bone & joint-related problems, Alimentary Tract problems, Obesity, Detoxification, Panchakarma, Rejuvenation, Gastroenterology, etc, through Ayurveda.",
    modalImg: member3,
  },
];

const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShow = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section className="team-section py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card team-card h-100 text-center shadow-sm"
                onClick={() => handleShow(member)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top team-img"
                />
                <div className="card-body team-content">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="text-primary fw-semibold">
                    {member.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          {selectedMember && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedMember.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={selectedMember.modalImg}
                      alt={selectedMember.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7">
                    <h4>{selectedMember.designation}</h4>
                    <p>{selectedMember.description}</p>
                    <ul className="list-inline mt-3">
                      <li className="list-inline-item mx-2">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-2">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-2">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-2">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Whatsapp"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Team;
