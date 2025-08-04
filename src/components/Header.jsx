import React from "react";
import { FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container-fluid py-2 bg-white border-bottom">
      <div
        className="d-flex justify-content-center align-items-center overflow-auto"
        style={{
          gap: "1.5rem",
          whiteSpace: "nowrap",
          fontSize: "14px",
          color: "#4E5652",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span><strong>Anna Nagar:</strong> 044-26215695 / 26209052</span>
        <span><strong>R.A Puram:</strong> 044-42100017 / 42100027</span>
        <span><strong>Lifestyle Consultation:</strong> +91-9444492464</span>
        <span className="flex">
          {/* <FaMobileAlt style={{ marginRight: "px" }} /> */}
          <FaWhatsapp  className="mt-1"/>
           +91-8680001020
        </span>
      </div>
    </div>
  );
}

export default Header;
