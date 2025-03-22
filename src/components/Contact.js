import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaLocationArrow } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-info">
        <p><FaEnvelope /> <a href="kevincostantino2500@gmail.com" target="_blank" rel="noopener noreferrer"></a>kevincostantino2500@gmail.com</p>
        <p><FaPhone /> +55 (67) 99285-3868</p>
        <p><FaLinkedin /> <a href="https://www.linkedin.com/in/kevin2500/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><FaGithub /> <a href="https://github.com/KevinCostantino" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><FaLocationArrow /> Campo Grande, MS</p>
      </div>
    </section>
  );
};

export default Contact;



