import React, { useState } from "react";
import Logo from "../Images/prakriti-logo.png";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const path = (item) => {
    switch (item) {
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
  };

  const navItems = [
    "HOME",
    "ABOUT",
    "OUR TEAM",
    "SERVICES",
    "GALLERY",
    "BLOG",
    "CONTACT",
    "BOOK NOW",
  ];

  return ( 
    <>
      {/* Top Line */}
      <div style={{ backgroundColor: "lightgray", height: "1px", width: "100%" }}></div>

      {/* Navbar */}
      <div className="bg-light shadow-sm py-3 px-3">
        <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between">

          {/* Logo */}
          <div className="me-3">
            <a href="/">
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

          {/* Hamburger Toggle (mobile only) */}
          <div className="d-md-none ms-auto">
            <button
              className="navbar-toggler"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              style={{
                backgroundColor: "green",
                border: "none",
                padding: "8px 12px",
                borderRadius: "4px",
              }}
            >
              <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
            </button>
          </div>

          {/* Collapsible Navigation Menu */}
          <div
            className={`w-100 ${isOpen ? "d-block" : "d-none"} d-md-flex align-items-center justify-content-between mt-3 mt-md-0`}
          >
            {/* Nav Items */}
            <ul className="nav flex-column flex-md-row text-center text-md-start mb-0 mx-md-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    href="#"
                    className="nav-link px-2"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(path(item));
                      setIsOpen(false);
                    }}
                    style={{
                      color: item === "HOME" ? "#b0d152" : "black",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="text-center text-md-end mt-3 mt-md-0">
              <a
                href="tel:8680001020"
                className="btn px-3"
                style={{
                  fontWeight: "600",
                  backgroundColor: "green",
                  color: "white",
                }}
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
