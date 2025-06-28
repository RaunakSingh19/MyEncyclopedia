import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/hero-banner.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="home"
    >
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">FITNESS & NUTRITION</p>
          <h1 className="hero-title">
            The Ultimate Guide to <br />
            What Fuels You.<br />
           Eat Smart. Live Well
          </h1>
          <p className="hero-text">
             Discover the Science Behind Every Bite.
          </p>
          <button className="btn btn-primary">Start Course</button>
          <div className="social-wrapper">
            <p className="social-title">Connect with us:</p>
            <ul className="social-list">
              <li><a href="#" className="social-link" aria-label="Facebook"><FaFacebookF /></a></li>
              <li><a href="#" className="social-link" aria-label="Skype"><FaSkype /></a></li>
              <li><a href="#" className="social-link" aria-label="Twitter"><FaTwitter /></a></li>
              <li><a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;