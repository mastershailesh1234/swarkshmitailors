import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="container">
      <div className="aboutus_herosection">
        <img className="aboutus_img" src="/assets/flatlay.jpg" alt="" />
        <div className="aboutus_info">
          <h1>Welcome to Swarkshmi Tailors!</h1>
          <p>
            We are a trusted and experienced tailor shop specializing in a wide
            range of clothing and sewing services whom you can trust for all
            your sewing needs, and experience our dedication to quality and
            customer satisfaction.
          </p>
        </div>
      </div>
      <h1 style={{ borderBottom: "2px solid black", marginTop: "40px" }}>
        Our Tailor Services
      </h1>
      <div className="aboutus_content">
        <div className="aboutus_card">
          <div className="card">
            <img src="./assets/false.jpg" alt="" />
            <h3>Saree False Par Sewing</h3>
          </div>
          <div className="card">
            <img src="./assets/kurti.jpg" alt="" />
            <h3>Kurti Fitting and New Making</h3>
          </div>
          <div className="card">
            <img src="./assets/blouse.jpeg" alt="" />
            <h3>Blouse Fitting and New Making</h3>
          </div>
          <div className="card">
            <img src="./assets/nighty.jpeg" alt="" />
            <h3>Nighty Fitting</h3>
          </div>
          <div className="card">
            <img src="./assets/lungi.jpg" alt="" />
            <h3>New Lungi Making</h3>
          </div>
          <div className="card">
            <img src="./assets/bedsheet.jpg" alt="" />
            <h3>New Bedsheet and Pillow Making</h3>
          </div>
          <div className="card">
            <img src="./assets/mosquito.jpg" alt="" />
            <h3>Mosquito Net</h3>
          </div>
          <div className="card">
            <img src="./assets/torn dress.jpg" alt="" />
            <h3>Any type of torn sewing</h3>
          </div>
        </div>
      </div>
      {/* <ul>
        <li>Sari false par sewing</li>
        <li>Kurti, nighty, blouse fittings</li>
        <li>New kurti, designer blouse making</li>
        <li>lungi, mosquito net, bedsheet, pillo cover sewing</li>
        <li>Any type of torn sewing</li>
        <li>
          All type of sewing work gets picked up from home and delivered within
          limited time
        </li>
      </ul> */}
    </div>
  );
};

export default AboutUs;
