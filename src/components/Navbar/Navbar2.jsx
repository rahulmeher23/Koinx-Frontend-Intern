import React from "react";
import "./NavbarStyles.css";
import koinxLogo from "../../assets/KoinX Logo.png";

const Navbar2 = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="nav-logo">
          <img src={koinxLogo} alt="KoinX-Logo" className="logo-img" />
        </div>

        <div className="nav-menu-container">
          <ul className="nav-list">
            <li className="nav-item">Crypto Taxes</li>
            <li className="nav-item">Free Tools</li>
            <li className="nav-item">Resource Center</li>
          </ul>

          <div className="nav-btn-container">
            <a href="" className="nav-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
