import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Brand + Newsletter */}
        <div className="footer-column">
          <h2 className="footer-brand">Devora<span>.</span></h2>
          <p className="footer-description">
            Stay updated with Food, fitness, and nutrition tips!
            DEVORA ENCYCLOPEDIA
          </p>
          {/* <p>a</p> */}
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button type="submit" className="footer-button">Subscribe</button>
          </form>
        </div>

        {/* Column 2: Help Links */}
        <div className="footer-column">
          <h3 className="footer-title">Help Links</h3>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Discussion</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="footer-column">
          <h3 className="footer-title">Connect With Us</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 <span className="footer-highlight">Devora</span>. Made with ❤️ by <a href="#">Raunak</a></p>
        <div className="footer-policy">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
          <a href="#">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
