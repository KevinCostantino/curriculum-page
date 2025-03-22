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
          <li><button className="nav-button" onClick={() => handleScroll('home')}>Home</button></li>
          <li><button className="nav-button" onClick={() => handleScroll('about')}>About Me</button></li>
          <li><button className="nav-button" onClick={() => handleScroll('projects')}>Projects</button></li>
          <li><button className="nav-button" onClick={() => handleScroll('experience')}>Experience/Skills</button></li>
          <li><button className="nav-button" onClick={() => handleScroll('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;