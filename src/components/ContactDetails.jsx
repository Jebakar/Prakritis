import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const InfoBox = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="text-xl text-blue-600">{icon}</div>
    <div>
      <h6 className="font-semibold">{title}</h6>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const ContactDetails = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h6 className="text-sm font-medium text-gray-500">What Are You Waiting For...</h6>
      <h2 className="text-2xl font-bold mb-6">Make an Appointment</h2>

      {/* Anna Nagar Branch */}
      <InfoBox
        icon={<FaMapMarkerAlt />}
        title="Anna Nagar"
        description="#AJ-15, 5th street, 9th main road, Annan agar, Chennai - 600 040."
      />
      <InfoBox
        icon={<FaPhoneAlt />}
        title="Tele Phone"
        description="+91-44-26215695 / +91-44-26209052"
      />
      <InfoBox
        icon={<FaMobileAlt />}
        title="Phone"
        description="+91-86800 01020"
      />
      <InfoBox
        icon={<FaWhatsapp />}
        title="WhatsApp"
        description="+91-86800 01020"
      />

      {/* RA Puram Branch */}
      <InfoBox
        icon={<FaMapMarkerAlt />}
        title="RA Puram"
        description="New No. 02 / Old No. 012, Kandaswamy Street, Raja Annamalaipuram, Chennai – 600 028 (Near R.A Puram BSNL Office)."
      />
      <InfoBox
        icon={<FaPhoneAlt />}
        title="Tele Phone"
        description="+91-44-42100017 / +91-44-42100027"
      />
      <InfoBox
        icon={<FaMobileAlt />}
        title="Phone"
        description="+91-86800 01020"
      />
      <InfoBox
        icon={<FaWhatsapp />}
        title="WhatsApp"
        description="+91-86800 01020"
      />

      {/* Divider */}
      <hr className="my-6 border-t" />

      {/* Working Hours */}
      <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
      <p className="mb-4 font-medium italic">Mon – Sun: 07am – 07pm</p>

      {/* Consultation Hours */}
      <h3 className="text-xl font-semibold mb-2">Consultation Hours</h3>
      <p className="font-medium italic">
        Mon – Sat: 10am – 01pm, 04pm – 07pm<br />
        <strong>Sunday:</strong> Based on the Appointments
      </p>
    </div>
  );
};

export default ContactDetails;
