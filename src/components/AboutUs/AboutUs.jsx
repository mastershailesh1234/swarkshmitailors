import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="container">
      <div className="aboutus_herosection">
        <img className="aboutus_img" src="/assets/bgimg.jpg" alt="" />
        <div className="aboutus_info">
          <h3>Welcome to Swarkshmi Tailors!</h3>
          <p>
            We are a trusted and experienced tailor shop specializing in a wide
            range of clothing and sewing services whom you can trust for all
            your sewing needs, and experience our dedication to quality and
            customer satisfaction.
          </p>
        </div>
        <div className="aboutus_info2">
          <h3>Our Tailor Services</h3>
          <ul>
            <li>Sari false par sewing</li>
            <li>Kurti, nighty, blouse fittings</li>
            <li>New kurti, designer blouse making</li>
            <li>lungi, mosquito net, bedsheet, pillo cover sewing</li>
            <li>Any type of torn sewing</li>
            <li>
              All type of sewing work gets picked up from home and delivered
              within limited time
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
