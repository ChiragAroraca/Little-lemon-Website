import React from "react";

import footerImage from "../images/small_logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="primary-background section">
        <div className="container-footer">
          <img className="footer-logo" src={footerImage} alt="error" />
          <div>
            <h3 className="footerHd">Sitemap</h3>

            <li className="footer-item">
              <Link to="/" className="footer-item">
                Home
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/menu-show" className="footer-item">
                Menu
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/booking" className="footer-item">
                Reservation
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/AboutUs" className="footer-item">
                About
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item">
                Login
              </Link>
            </li>
          </div>
          <div>
            <h3 className="footerHd">Contact Us</h3>

            <li className="footer-item">678 Pisa Ave, Chicago, IL 60611s</li>
            <li className="footer-item">(312) 593-2744</li>
            <li className="footer-item">customer@littlelemon.com</li>
          </div>
          <div className="footerSocials">
            <h3 className="footerHd">Connect with Us</h3>
            <div>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <p className="trademark">2021@littlelemon.com</p>
      </section>
    </>
  );
};

export default Footer;
