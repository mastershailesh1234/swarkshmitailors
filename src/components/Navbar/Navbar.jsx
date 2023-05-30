import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <img
          className="navbar_img"
          src="../../../assets/logo.png"
          alt="Swarkshmi Tailors"
        />
      </div>
      <div className="navbar_content">
        <h2>Crafted to Perfection, Tailored for You</h2>
      </div>
    </div>
  );
};

export default Navbar;
