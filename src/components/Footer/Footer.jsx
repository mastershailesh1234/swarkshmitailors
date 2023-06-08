import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="up">
        <div className="footer_left">
          <div className="navbar_logo">
            <img
              className="navbar_img"
              src="/assets/logo.png"
              alt="Swarkshmi Tailors"
            />
          </div>
        </div>
        <div className="footer_right">
          <h2>LINKS</h2>
          <a style={{ color: "black" }} href="tel:+919434198819">
            CALL NOW
          </a>
          <a
            style={{ color: "black" }}
            aria-label="Chat on WhatsApp"
            href="https://wa.me/919434198819"
          >
            WHATSAPP
          </a>
          <a style={{ color: "black" }} href="mailto:swarkshmitailor@gmail.com">
            EMAIL
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.instagram.com/swarkshmitailor/"
          >
            INSTAGRAM
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.facebook.com/profile.php?id=100093316921714"
          >
            FACEBOOK
          </a>
        </div>
      </div>
      <div className="down">
        <h3>2023 : SWARKSHMI TAILORS</h3>
      </div>
    </div>
  );
};

export default Footer;
