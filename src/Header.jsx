import React from "react";
import { FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container-fluid py-3 mt-4">
      <div
        className="d-flex justify-content-center align-items-center flex-wrap text-center animate__animated animate__fadeInUp"
        style={{
          gap: "1rem",
          fontSize: "15px",
          color: "#4E5652",
          fontFamily: "'Inter', sans-serif",
          lineHeight: "1.2",
        }}
      >
        <span><strong>Anna Nagar:</strong> 044-26215695 / 26209052</span>
        <span><strong>R.A Puram:</strong> 044-42100017 / 42100027</span>
        <span><strong>Lifestyle Consultation:</strong> +91-9444492464</span>
        <span>
          <FaMobileAlt style={{ marginRight: "5px" }} /> /
          <FaWhatsapp style={{ margin: "0 5px" }} /> +91-8680001020
        </span>
      </div>
    </div>
  );
}

export default Header;
