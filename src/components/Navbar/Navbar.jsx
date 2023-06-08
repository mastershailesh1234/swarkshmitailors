import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <img
          className="navbar_img"
          src="/assets/logo.png"
          alt="Swarkshmi Tailors"
        />
      </div>
      <div className="navbar_content">
        <h3>Crafted to Perfection, Tailored for You</h3>
      </div>
      <div className="navbar_menu">
        <Link to="/">
          {" "}
          <button className="navbar_button">About Us</button>
        </Link>
        <Link to="/pricing">
          <button className="navbar_button">Pricing</button>
        </Link>
        <Link to="/contactus">
          <button className="navbar_button">Contact Us</button>
        </Link>
        <button
          className="navbar_button"
          style={{ backgroundColor: "lightgreen" }}
        >
          <a href="tel:+919434198819">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
{
  /* <Link to="/login">
  <button className="header_button">
    <FontAwesomeIcon icon={faUser} />
    LOGIN
  </button>
</Link>; */
}
