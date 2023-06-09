import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faComments,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <h2 style={{ margin: "10px", borderBottom: "1px solid black" }}>
        Contact Us
      </h2>
      <div className="contact_row">
        <div className="contact_row_logo">
          <FontAwesomeIcon width={"100%"} icon={faPhone} size="2xl" />
        </div>
        <div className="contact_row_left">
          <h4>TALK TO US!</h4>
          <p>Got questions? We've got answers!</p>
          <p>
            {" "}
            Alternative no.- <b>6297599688</b>
          </p>
        </div>
        <div className="contact_row_right">
          <button className="contact_button">
            {" "}
            <a href="tel:+919434198819">CALL NOW</a>
          </button>{" "}
        </div>
      </div>
      <div className="contact_row">
        <div className="contact_row_logo">
          <FontAwesomeIcon width={"100%"} icon={faComments} size="2xl" />
        </div>
        <div className="contact_row_left">
          <h4>CHAT WITH US</h4>
          <p>Typical reply time: within seconds</p>
          <p> Everyday 8AM - 9PM</p>
        </div>
        <div className="contact_row_right">
          <button className="contact_button">
            {" "}
            <a aria-label="Chat on WhatsApp" href="https://wa.me/919434198819">
              WHATSAPP
            </a>
          </button>{" "}
        </div>
      </div>
      <div className="contact_row">
        <div className="contact_row_logo">
          <FontAwesomeIcon width={"100%"} icon={faEnvelope} size="2xl" />
        </div>
        <div className="contact_row_left">
          <h4>MAIL US</h4>
          <p>Typical reply time: within a day</p>
          <p> Everyday 8AM - 9PM</p>
        </div>
        <div className="contact_row_right">
          <button className="contact_button">
            {" "}
            <a href="mailto:swarkshmitailor@gmail.com">EMAIL</a>
          </button>{" "}
        </div>
      </div>
      <div className="contact_row">
        <div className="contact_row_logo">
          {/* <FontAwesomeIcon width={"100%"} icon={faInstagramSquare} size="2xl" /> */}
          <svg
            style={{ width: "100%" }}
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </div>
        <div className="contact_row_left">
          <h4>CONNECT WITH US</h4>
          <p>INSTAGRAM</p>
        </div>
        <div className="contact_row_right">
          <button className="contact_button">
            {" "}
            <a href="https://www.instagram.com/swarkshmitailor/">INSTAGRAM</a>
          </button>{" "}
        </div>
      </div>
      <div className="contact_row">
        <div className="contact_row_logo">
          <svg
            style={{ width: "100%" }}
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 512 512"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
        </div>
        <div className="contact_row_left">
          <h4>CONNECT WITH US</h4>
          <p>FACEBOOK</p>
        </div>
        <div className="contact_row_right">
          <button className="contact_button">
            {" "}
            <a href="https://www.facebook.com/profile.php?id=100093316921714">
              FACEBOOK
            </a>
          </button>{" "}
        </div>
      </div>
      <h3>LOCATION</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.494394395847!2d88.07084669999999!3d24.4683212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa370f3635c4fd%3A0x8606da668ee7b49c!2sSwarkshmi%20Tailor!5e0!3m2!1sen!2sin!4v1686208890489!5m2!1sen!2sin"
        width="90%"
        height="450"
        style={{ border: 0, marginBottom: "100px", marginTop: "20px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactUs;
