import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact-section">
      <h2>Get <span className="me-highlight">In Touch</span></h2>
      <p>
        Feel free to reach out through any of the platforms below!
      </p>
      <div className="social-icons">
        <a href="https://github.com/nehallopes" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/nehallopes/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/nehal-marshal-lopes-8aa266194/?trk=opento_sprofile_pfeditor" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p>
        Copyright © 2024 All rights reserved.
      </p>
    </footer>
  );
};

export default Contact;
