import React from 'react';
import './AboutSection.css';
import rotatingbadge from '../assets/images/about-shape-1.png';
import background1 from '../assets/images/about-banner.jpg';

const AboutSection = () => (
  <section className="section about" aria-label="about" id="about">
    <div className="container about-grid">
      <div className="about-banner-wrapper">
        <div className="rotating-logo">
          <img src={rotatingbadge} alt="Rotating Badge" />
        </div>
        <div className="about-banner">
          <img
            src={background1}
            alt="Instructor"
            className="img-cover"
            width="470"
            height="580"
            loading="lazy"
          />
          <a href="#" className="btn btn-secondary">
            Meet Instructor
          </a>
        </div>
      </div>
      <div className="about-content">
        <p className="section-subtitle">25+ Years Of Trust.</p>
       <h2 className="h2 section-title">
  Explore Knowledge Backed by Experts
</h2>
<p className="section-text">
  Our encyclopedia is curated and maintained by a team of subject-matter experts, ensuring accurate, up-to-date, and trustworthy information across a wide range of topics.
</p>
<h3 className="about-h3">10,000+ Articles & Growing</h3>
<p className="section-text">
  From science and history to health and technology, our ever-expanding collection is designed to make complex information accessible to everyone — students, researchers, and the curious mind alike.
</p>

      </div>
    </div>
  </section>
);

export default AboutSection;
