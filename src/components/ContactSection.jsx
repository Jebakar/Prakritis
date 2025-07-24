import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="contact-section mt-5">
      <div className="container info d-flex flex-wrap ">
        {/* Contact Info Left */}
        <div className="left-column">
          <h2>Contact Details</h2>

          <div className="contact-box">
            <FaMapMarkerAlt className="icon" />
            <div className="">
              <h6>Anna Nagar</h6>
              <p>#AJ-15, 5th street, 9th main road, Anna nagar, Chennai - 40</p>
            </div>
          </div>

          <div className="contact-box">
            <MdPhone className="icon" />
            <div>
              <h6>Phone</h6>
              <p>+91-44-26215695 / +91-44-26209052</p>
            </div>
          </div>

          <div className="contact-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h6>Phone</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>

          <div className="contact-box">
            <FaWhatsapp className="icon" />
            <div>
              <h6>Whatsapp</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>

          <div className="contact-box">
            <FaClock className="icon" />
            <div>
              <h6>Working Hours</h6>
              <p>Mon - Sun 07:00 AM - 07:00 PM</p>
            </div>
          </div>

          <hr />

          <div className="contact-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h6>RA Puram</h6>
              <p>
                New No. 02 / Old No. 012, Kandaswamy Street, Raja
                Annamalaipuram, Chennai – 600 028 (Near R.A Puram BSNL Office).
              </p>
            </div>
          </div>

          <div className="contact-box">
            <MdPhone className="icon" />
            <div>
              <h6>Phone</h6>
              <p>+91-44-42100017 / +91-44-42100027</p>
            </div>
          </div>

          <div className="contact-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h6>Phone</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>

          <div className="contact-box">
            <FaWhatsapp className="icon" />
            <div>
              <h6>Whatsapp</h6>
              <p>+91-86800 01020</p>
            </div>
          </div>

          <div className="contact-box">
            <FaClock className="icon" />
            <div>
              <h6>Working Hours</h6>
              <p>Mon - Sun 07:00 AM - 07:00 PM</p>
            </div>
          </div>
        </div>

        {/* Enquiry Form Right */}
        <div className="right-column">
          <h4 className="text-bold">Enquiry</h4>
          <form className="enquiry-form mt-4">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Your Phone" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
