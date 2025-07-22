import React from "react";
import Logo from "../Images/prakriti-logo.png";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const navigate=useNavigate();
const path = (item) => {
  switch(item) {
    case "HOME": return "/";
    case "ABOUT": return "/about";
    case "OUR TEAM": return "/team";
    case "SERVICES": return "/services";
    case "GALLERY": return "/gallery";
    case "BLOG": return "/blog";
    case "CONTACT": return "/contact";
    case "BOOK NOW": return "/book";
    default: return "/";
  }
}

  return (
    <>
      {/* Top Line */}
      <div style={{ backgroundColor: "lightgray", height: "1px", width: "100%" }}></div>

      {/* Navbar */}
      <div className="container-fluid bg-light shadow-sm py-3">
        <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between">
          
          {/* Logo */}
          <div className="me-auto ps-4">
            <a href="#">
              <img
                src={Logo}
                alt="Prakriti Ayurveda"
                width="200"
                height="70"
                className="img-fluid"
                style={{ maxWidth: "190px" }}
              />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="d-md-none ms-auto">
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleContent"
              aria-controls="navbarToggleContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                backgroundColor: "green",
                border: "none",
                padding: "8px 12px",
                borderRadius: "4px",
              }}
            >
              <span
                className="navbar-toggler-icon"
                style={{ filter: "invert(1)" }}
              ></span>
            </button>
          </div>

          {/* Collapsible Content */}
          <div
            className="collapse d-md-flex w-100 justify-content-between align-items-center mt-3 mt-md-0"
            id="navbarToggleContent"
          >
            {/* Navigation Links */}
            <ul className="nav flex-column flex-md-row mx-auto text-center">
              {["HOME", "ABOUT", "OUR TEAM", "SERVICES", "GALLERY", "BLOG", "CONTACT", "BOOK NOW"].map((item) => (
               <li className="nav-item" key={item}>
            <a
  href="#"
  className={`nav-link px-2 ${item === "HOME" ? "active-link" : ""}`}
  onClick={(e) => {
    e.preventDefault();
    navigate(path(item));
  }}
  style={{ color: item === "HOME" ? "#b0d152" : "black", fontWeight: "600" }}
>
  {item}
</a>


             </li>
               ))}
           </ul>


            {/* Online Consultation Button */}
            <div className="text-center text-md-end mt-3 mt-md-0">
              <a
                href="tel:8680001020"
                className="btn px-3 online-btn"
                style={{ fontWeight: "600" }}
              >
                ONLINE CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbars;
