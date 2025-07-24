import React from "react";

const Contacthead = () => {
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
          We are here
        </h6>
        <h1
          className="text-white fw-bold"
          style={{
            fontSize: "88px",
            fontFamily: "'Brygada 1918', serif",
            lineHeight: "1.2",
          }}
        >
          Location
        </h1>
      </div>
    </section>
  );
};

export default Contacthead;
