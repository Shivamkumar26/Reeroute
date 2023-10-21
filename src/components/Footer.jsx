import React from "react";
import "./Footer.css";
import Appstore from "./images/appstore.jpg";
import Playstore from "./images/playstore.jpg";
import Call from "./images/Call.jpg";
import Email from "./images/Email.jpg";
import { Icon } from 'react-icons-kit';
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { twitter } from "react-icons-kit/fa/twitter";
import { linkedin } from "react-icons-kit/fa/linkedin";

function Footer() {
  return (
    <footer className="home-footer">
      <div className="row">
        <div className="col-a">
          <h2 className="logo-secondary">REEROUTE</h2>
          <p className="txt">
            Integer vestibulum justo nec arcu bibendum, vel suscipit neque
            condimentum.
          </p>
          <div className="box">
          <img 
          className="icons"
            src = {Email}
            alt = "email" />
            <div className="content">
              <p>Email</p>
              <p>reeroute@email.com</p>
            </div>
          </div>
          <div className="box">
          <img 
          className="icons"
            src = {Call}
            alt = "call" />
            <div className="content">
              <p>Call</p>
              <p>(00) 112 983 373</p>
            </div>
          </div>
        </div>

        <div className="col">
          <ul className="footer-tabs">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Mobile App</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul className="footer-tabs">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>

        <div className="col-b">
          <h3 className="download-app">Download App</h3>

          <div className="download-option">
            <img
              className="download-option1"
              src={Playstore}
              alt="download options"
            />
            <img
              className="download-option2"
              src={Appstore}
              alt="download options"
            />
          </div>

          <div className="social-icons">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={instagram} size={24} style={{ color: "#ffffff" }} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={facebook} size={24} style={{ color: "#ffffff" }} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={twitter} size={24} style={{ color: "#ffffff" }} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={linkedin} size={24} style={{ color: "#ffffff" }} />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © ReeRoute | Designed by Shivam Kumar</p>
    </footer>
  );
}

export default Footer;