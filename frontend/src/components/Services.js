import React from 'react';
import './Services.css';

const services = [
  {
    title: " For Women",
    text: "Balanced eating supports hormonal health, boosts energy, and strengthens bones. Nutrient-rich foods like leafy greens, legumes, and whole grains are essential for long-term wellness and vitality.",
  },
  {
    title: "General Tips",
    text: "Good nutrition is the foundation of a healthy life. Focus on whole foods, stay hydrated, and aim for variety—fruits, vegetables, proteins, and healthy fats—to fuel your body and mind every day.",
    active: true,
  },
  {
    title: " For Men",
    text: "Eating smart enhances strength, supports heart health, and maintains muscle mass. Lean proteins, fiber-rich carbs, and healthy fats help optimize performance and support active lifestyles.",
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