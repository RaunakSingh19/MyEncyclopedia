import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          font-family: 'Segoe UI', sans-serif;
          padding: 60px 20px;
          background-color: #f8f9fa;
          color: #222;
          max-width: 1000px;
          margin: auto;
        }

        .contact-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          color: #013636;
        }

        .contact-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        .contact-form {
          flex: 1;
          min-width: 280px;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        .contact-form textarea {
          resize: vertical;
          height: 150px;
        }

        .contact-form button {
          background-color: #013636;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #015959;
        }

        .contact-map {
          flex: 1;
          min-width: 280px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .contact-map iframe {
          width: 100%;
          height: 100%;
          border: none;
          min-height: 400px;
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            flex-direction: column;
          }
        }
      `}</style>

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Map / Info (Optional) */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
