import React from 'react';
import './Projects.css';
import ProjetoRPG from './media/ProjetoRPG.jpeg';
import DigitalClock from './media/DigitalClock.png';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projetos</h2>
      <div className="projects-container">
        <div className="project-box">
          <a href="https://kevincostantino.github.io/JavaScript_Pokemon_RPG/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="project-link">
            <img src={ProjetoRPG} alt="RPG Project" className="project-image" />
            <div className="project-content">
              <h3>Demonstração de jogo web RPG</h3>
            </div>
          </a>
        </div>
        
        <div className="project-box">
          <a href="https://kevincostantino.github.io/DigitalClock/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="project-link">
            <img src={DigitalClock} alt="Digital Clock" className="project-image" />
            <div className="project-content">
              <h3>Relógio Digital (React + Vite)</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;