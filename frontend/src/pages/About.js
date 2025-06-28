import React from 'react';

const About = () => {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>About Devora</h1>
      
      <div style={{ backgroundColor: 'white', padding: 30, borderRadius: 8, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: 20 }}>What is Devora?</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20 }}>
          <strong>Devora</strong> is a comprehensive online encyclopedia dedicated to the world of fruits. From ancient origins to modern nutrition science, we document and organize reliable, in-depth information about fruits for learners, educators, and health-conscious individuals.
        </p>

        <h2 style={{ color: '#2c3e50', marginBottom: 20 }}>Our Mission</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20 }}>
          Our goal is to make fruit knowledge accessible and authoritative. Whether you're a student, researcher, or simply curious about the benefits of your favorite fruit, Devora is your trusted source for accurate, science-backed content.
        </p>

        <h2 style={{ color: '#2c3e50', marginBottom: 20 }}>What You'll Find</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
          <li>Detailed encyclopedic entries on fruits from every continent</li>
          <li>Nutritional profiles with scientific references</li>
          <li>Health benefits and traditional medicinal uses</li>
          <li>Insights from botany, agriculture, and culinary history</li>
          <li>Regularly updated blog and curated resources</li>
        </ul>

        <h2 style={{ color: '#2c3e50', marginBottom: 20 }}>Why It Matters</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          In a world full of misinformation, Devora brings clarity. Our content is carefully compiled, reviewed, and organized to empower users with trustworthy knowledge about the fruits they eat and explore. Think of us as the digital library for fruit education.
        </p>
      </div>
    </div>
  );
};

export default About;
