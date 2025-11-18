import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Calcular offset para centralizar a seção
      const headerHeight = 80; // Altura do header fixo
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      
      // Offset para centralizar a seção na tela
      let offset = 0;
      
      if (id === 'home') {
        // Home: scroll para o topo
        offset = -12;
      } else if (id === 'experience') {
        // Experience: offset menor para mostrar mais conteúdo
        offset = headerHeight - 115;
      } else if (id === 'projects') {
        // Projects: centralizar na tela
        offset = headerHeight - 100;
      } else if (id === 'skills') {
        // Skills: centralizar o gráfico radar
        offset = headerHeight - 90;
      } else if (id === 'contact') {
        // Contact: mostrar toda a seção
        offset = headerHeight + 50;
      }
      
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
    }
  };

  // Detectar seção ativa durante o scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Verificar se chegou exatamente no fim da página (não pode mais scrollar)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Se chegou exatamente no fim (não pode mais scrollar), ativar Contact
      if (scrollTop + windowHeight >= documentHeight - 500) {
        setActiveSection('contact');
        return;
      }
      
      // Lógica normal de detecção por seção
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <button 
              className={`nav-button ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => handleScroll('home')}
            >
              <span>Home</span>
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${activeSection === 'experience' ? 'active' : ''}`} 
              onClick={() => handleScroll('experience')}
            >
              <span>Experience</span>
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`} 
              onClick={() => handleScroll('projects')}
            >
              <span>Projects</span>
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`} 
              onClick={() => handleScroll('skills')}
            >
              <span>Skills</span>
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={() => handleScroll('contact')}
            >
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;