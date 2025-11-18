import React from 'react';
import './Projects.css';
import ProjetoRPG from './media/ProjetoRPG.jpeg';
import DigitalClock from './media/DigitalClock.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'RPG Web Game',
      description: 'Jogo RPG interativo desenvolvido com JavaScript puro, apresentando mecânicas de combate, evolução de personagens e interface dinâmica.',
      image: ProjetoRPG,
      url: 'https://kevincostantino.github.io/JavaScript_Pokemon_RPG/',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Game Dev'],
      status: 'Concluído',
      type: 'Web Game'
    },
    {
      id: 2,
      title: 'Relógio Digital',
      description: 'Aplicação web moderna de relógio digital com interface elegante, desenvolvida em React e Vite para performance otimizada.',
      image: DigitalClock,
      url: 'https://kevincostantino.github.io/DigitalClock/',
      tags: ['React', 'Vite', 'JavaScript', 'CSS3'],
      status: 'Concluído',
      type: 'Web App'
    }
  ];

  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <a 
              href={project.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Ver projeto: ${project.title}`}
            >
              <div className="image-container" style={{ position: 'relative' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
                <div className="project-overlay">
                  <span>🔗 Ver Projeto</span>
                </div>
                <div className="external-link-icon">
                  ↗️
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-stats">
                  <div className="project-stat">
                    <span>📊</span>
                    <span>{project.type}</span>
                  </div>
                  <div className="project-stat">
                    <span>✅</span>
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
        
        {/* Card para mais projetos */}
        <div className="project-box" style={{ opacity: 0.8 }}>
          <div className="project-link" style={{ cursor: 'default' }}>
            <div className="image-container" style={{ 
              position: 'relative',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                color: 'white',
                fontSize: '3rem',
                textAlign: 'center'
              }}>
                🚀<br />
                <span style={{ fontSize: '1.5rem' }}>Mais projetos<br />em breve...</span>
              </div>
            </div>
            
            <div className="project-content">
              <h3>Próximos Projetos</h3>
              <p className="project-description">
                Estou sempre trabalhando em novos projetos interessantes! 
                Acompanhe meu GitHub para ver as últimas atualizações.
              </p>
              
              <div className="project-tags">
                <span className="project-tag">Em Desenvolvimento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;