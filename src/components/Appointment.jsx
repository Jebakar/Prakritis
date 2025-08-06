import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

function AppointmentSection() {
  return (
    <section className="py-5 bg-light text-center appoinment animate__animated animate__fadeInUp">
      <div className="container full">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-8">
            <h5 className="text-muted subtitle">Everyday Relax</h5>
            <h2 className=" title">Get Appointment</h2>
            <p className="mt-2" style={{fontSize:"20px"}}>CONSULTATIONS | TREATMENTS | PHARMACY</p>
          </div>
        </div>

        <div className="row justify-content-center mb-3 ">
          <div className="col-md-6 d-flex justify-content-center gap-4 flex-wrap">
            <a href="tel:+918680001020" className="text-decoration-none text-dark d-flex align-items-center gap-2">
              <FaPhoneAlt />
              <span>+91 - 86800 01020</span>
            </a>
            <span>|</span>
            <a href="https://wa.me/918680001020?text=" target="_blank" rel="noreferrer" className="text-decoration-none text-success d-flex align-items-center gap-2">
              <FaWhatsapp />
              <span>+91 - 86800 01020</span>
            </a>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <a
              href="/Booking"
              className="btn btn-success  d-inline-flex align-items-center gap-2" 
            >
              
              Book An Appointment
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentSection;
