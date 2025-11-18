import React from 'react';
import './Header.css';

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><button className="nav-button" onClick={() => handleScroll('home')}><span>Home</span></button></li>
          <li><button className="nav-button" onClick={() => handleScroll('experience')}><span>Experience</span></button></li>
          <li><button className="nav-button" onClick={() => handleScroll('projects')}><span>Projects</span></button></li>
          <li><button className="nav-button" onClick={() => handleScroll('skills')}><span>Skills</span></button></li>
          <li><button className="nav-button" onClick={() => handleScroll('contact')}><span>Contact</span></button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;