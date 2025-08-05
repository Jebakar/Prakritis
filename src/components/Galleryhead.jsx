import React from "react";
import Header from "./Header";

const Galleryhead = ({ item,item2 }) => {
  return (
       <section
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundColor: "#90A93E",
        minHeight: "50vh", // Full screen height
      }}
    >
      <div>
        <h6
          className="text-uppercase text-white mb-3"
          style={{
            letterSpacing: "2px",
            fontFamily: "'Brygada 1918', serif",
            fontSize: "18px",
          }}
        >
          {item2}
        </h6>
        <h1
          className="text-white fw-bold"
          style={{
            fontSize: "88px",
            fontFamily: "'Brygada 1918', serif",
            lineHeight: "1.2",
          }}
        >
         {item}
        </h1>
        <a href="/AdminAppointments" className="btn btn-light mt-4 px-4 py-2" style={{ fontWeight: "600" }}>
        Admin Appointments
        </a>
      </div>
     
    </section>
  );
};

export default Galleryhead;
