import React from 'react';
import './Projects.css';
import ProjetoRPG from './media/ProjetoRPG.jpeg';
import DigitalClock from './media/DigitalClock.png';
import ChatbotWhats from './media/AI_Chat_WhatsApp.png';
import AnalisaGastos from './media/Analisa_Gastos.png';
import EncurtaLink from './media/EncurtadorLink.png';
import GestaoTarefas from './media/Gestão_Tarefas.jpg';
import SistemaNotifica from './media/Sistema_De_Notificações.png';
import TriviD from './media/TriviD_fundo.jpeg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'RPG Web Game',
      description: 'Jogo RPG interativo desenvolvido com JavaScript puro, apresentando mecânicas de combate, evolução de personagens e interface dinâmica.',
      image: ProjetoRPG,
      url: 'https://kevincostantino.github.io/JavaScript_Pokemon_RPG/',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Game Dev'],
      status: '',
      type: 'Web Game',
    },
    {
      id: 2,
      title: 'Relógio Digital',
      description: 'Aplicação web moderna de relógio digital com interface elegante, desenvolvida em React e Vite para performance otimizada.',
      image: DigitalClock,
      url: 'https://kevincostantino.github.io/DigitalClock/',
      tags: ['React', 'Vite', 'JavaScript', 'CSS3'],
      status: '',
      type: 'Web App',
    },
    {
      id: 3,
      title: 'TriviD – SaaS de download de vídeo',
      description: 'Desenvolvimento de uma plataforma SaaS (Software as a Service) voltada para o download de vídeos de forma prática e intuitiva, com sistema de assinatura integrado. Responsável pelo front-end, utilizando TypeScript, Python e o framework Electron para criação da aplicação desktop.',
      image: TriviD, // Será adicionado depois
      url: 'https://github.com/KevinCostantino/Trivid_app_exe',
      tags: ['TypeScript', 'Python', 'Electron', 'SaaS'],
      status: '',
      type: 'Desktop App',
    },
    {
      id: 4,
      title: 'Programa de Gestão de Tarefas Completo',
      description: 'Desenvolvimento fullstack individual de um sistema completo de gerenciamento de tarefas, aplicando Nest.js, JavaScript, TypeScript, Python, e arquitetura baseada em microserviços. Infraestrutura configurada com Docker, RabbitMQ e PostgreSQL.',
      image: GestaoTarefas,
      url: 'https://github.com/KevinCostantino/Gerenciador_de_tarefas_com_microsservicos',
      tags: ['Nest.js', 'TypeScript', 'Docker', 'PostgreSQL', 'RabbitMQ'],
      status: '',
      type: 'Fullstack',
    },
    {
      id: 5,
      title: 'Sistema de Chat AI com RAG e Integração WhatsApp',
      description: 'Desenvolvimento fullstack de um sistema completo de chatbot inteligente com WhatsApp, aplicando React, TypeScript, Node.js, Express e tecnologias de Inteligência Artificial. Implementação de sistema RAG (Retrieval Augmented Generation) com busca contextual em documentos.',
      image: ChatbotWhats,
      url: 'https://github.com/KevinCostantino/Chat-de-IA-com-RAG---WhatsApp',
      tags: ['React', 'TypeScript', 'Node.js', 'AI', 'WhatsApp API'],
      status: '',
      type: 'AI System',
    },
    {
      id: 6,
      title: 'Sistema de Notificações Fullstack Completo',
      description: 'Desenvolvimento fullstack individual de um sistema completo de gerenciamento de notificações, aplicando Node.js/Express.js, React.js, MongoDB, e arquitetura RESTful com autenticação JWT e cache Redis.',
      image: SistemaNotifica,
      url: 'https://github.com/KevinCostantino/Sistema_De_Notificacoes',
      tags: ['Node.js', 'React', 'MongoDB', 'Redis', 'Docker'],
      status: '',
      type: 'Fullstack',
    },
    {
      id: 7,
      title: 'Analisador Inteligente de Gastos com AWS',
      description: 'Desenvolvimento fullstack de uma API completa de análise financeira automatizada, aplicando C# .NET 8, ASP.NET Core, AWS DynamoDB, e arquitetura híbrida cloud-local para processamento otimizado de dados.',
      image: AnalisaGastos,
      url: 'https://github.com/KevinCostantino/Analisador-de-Gastos-Inteligente',
      tags: ['C#', '.NET 8', 'AWS', 'DynamoDB', 'Lambda'],
      status: '',
      type: 'Cloud API',
    },
    {
      id: 8,
      title: 'Plataforma de Encurtador de URLs com Analytics',
      description: 'Desenvolvimento de uma plataforma de encurtamento de URLs, aplicando Spring Boot 3.1, Vue.js 3, PostgreSQL, Redis e arquitetura REST API para alta performance. Infraestrutura containerizada com Docker.',
      image: EncurtaLink,
      url: 'https://github.com/KevinCostantino/Encurtador-de-Link',
      tags: ['Spring Boot', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker'],
      status: '',
      type: 'Web Platform',
    }
  ];

  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            {project.url !== '#' ? (
              <a 
                href={project.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Ver projeto: ${project.title}`}
              >
                <ProjectContent project={project} />
              </a>
            ) : (
              <div className="project-link" style={{ cursor: 'default' }}>
                <ProjectContent project={project} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente para o conteúdo do projeto
const ProjectContent = ({ project }) => {
  return (
    <>
              <div className="image-container" style={{ position: 'relative' }}>
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image" 
                    />
                    <div className="project-overlay">
                      <span>🔗 Ver Projeto</span>
                    </div>
                    {project.url !== '#' && (
                      <div className="external-link-icon">
                        ↗️
                      </div>
                    )}
                  </>
                ) : (
                  <div className="project-placeholder" style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    height: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    textAlign: 'center'
                  }}>
                    💼<br />
                    <span style={{ fontSize: '1rem' }}>Em Portfólio</span>
                  </div>
                )}
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
                    <span></span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="project-stat">
                    <span></span>
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
    </>
  );
};

export default Projects;
