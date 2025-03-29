import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contacts = [
    { 
      icon: <FaEnvelope className="contact-icon" />,
      content: 'kevincostantino2500@gmail.com',
      link: 'mailto:kevincostantino2500@gmail.com'
    },
    { 
      icon: <FaPhone className="contact-icon" />,
      content: '(67) 99285-3868',
      link: 'tel:+5567992853868'
    },
    { 
      icon: <FaLinkedin className="contact-icon" />,
      content: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kevin2500/'
    },
    { 
      icon: <FaGithub className="contact-icon" />,
      content: 'GitHub',
      link: 'https://github.com/KevinCostantino'
    },
    { 
      icon: <FaMapMarkerAlt className="contact-icon" />,
      content: 'Campo Grande, MS',
      link: 'https://maps.google.com/?q=Campo+Grande+MS'
    }
  ];

  return (
    <footer id="contact" className="contact-footer" style={{ marginBottom: 0 }}>
      <h2>Contatos</h2>
      <div className="hexagon-grid">
        {contacts.map((contact, index) => (
          <a 
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hexagon"
          >
            <div className="hexagon-content">
              {contact.icon}
              <span>{contact.content}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Kevin Costantino. Todos os direitos reservados.
      </div>

      <div className="final-bar" style={{
    height: '4px',
    background: 'linear-gradient(90deg, #42a5f5, #9C27B0)',
    width: '100%',
    marginTop: '2rem'
  }} />
    </footer>
  );
};

export default Contact;