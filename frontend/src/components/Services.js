import React from 'react';
import './Services.css';

const services = [
  {
    title: "Women's Course",
    text: "Lorem Ipsum is simply dummy themes industries psum has been them industry the loop into type setting.",
  },
  {
    title: "Basic Course",
    text: "Lorem Ipsum is simply dummy themes industries psum has been them industry the loop into type setting.",
    active: true,
  },
  {
    title: "Men's Course",
    text: "Lorem Ipsum is simply dummy themes industries psum has been them industry the loop into type setting.",
  },
];

const Services = () => (
  <section className="services-section">
    <div className="services-container">
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card ${service.active ? 'active' : ''}`}
          >
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;