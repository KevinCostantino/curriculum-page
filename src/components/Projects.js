import React from 'react';
import './Projects.css';
import ProjetoRPG from './media/ProjetoRPG.jpeg';
import DigitalClock from './media/DigitalClock.png';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-block">
        <img src={ProjetoRPG} alt="Project 1" style={{ width: "600px", height: "auto" }} />
        <p>Demonstração de jogo web RPG.</p>
          <a href="https://kevincostantino.github.io/JavaScript_Pokemon_RPG/" target="_blank" rel="noopener noreferrer">Conferir Projeto</a>
        </div>
        <div className="project-block">
        <img src={DigitalClock} alt="Project 2"  style={{ width: "600px", height: "auto" }} />
        <p>Relógio Digital (React + Vitae).</p>
          <a href="https://kevincostantino.github.io/DigitalClock/" target="_blank" rel="noopener noreferrer">Conferir Projeto</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;