import React from 'react';
import './Home.css';
import fotoCurriculo from './media/foto_curriculo.jpeg';
import { FaCode, FaDatabase, FaReact, FaPython, FaJsSquare, FaCogs } from 'react-icons/fa';

const Home = () => {
  const skills = ['Fullstack (foco em Front-End)', 'Python',, 'PostgreSQL', 'React', 'TypeScript'];

  return (
    <section id="home" className="section">
      <div className="home-container">
        <div className="profile-section">
          <div className="image-wrapper">
            <img 
              src={fotoCurriculo} 
              alt="Kevin Nicolas Costantino - Engenheiro da Computação" 
              className="profile-image" 
            />
            <FaCode className="programming-icon icon1 floating-element" />
            <FaReact className="programming-icon icon2 floating-element" />
            <FaPython className="programming-icon icon3 floating-element" />
            <FaDatabase className="programming-icon icon4 floating-element" />
            <FaJsSquare className="programming-icon icon5 floating-element" />
            <FaCogs className="programming-icon icon6 floating-element" />

          </div>
        </div>

        <div className="content-section">
          <div className="intro-text">
            <h1>Kevin Nicolas Costantino</h1>
            <h2>Engenheiro da Computação e Desenvolvedor</h2>
            
            <p>
              Graduado em Engenharia de Computação, possuo ampla experiência no desenvolvimento de software e na criação de soluções tecnológicas inovadoras. Na minha posição mais recente, atuei em uma empresa de investimentos como desenvolvedor front-end, sendo responsável pela aplicação bancária corporativa construída com TypeScript e Angular, garantindo interfaces intuitivas, seguras e de alto desempenho.
            </p>
            
            <p>
              Anteriormente, fui responsável pela implementação e manutenção de APIs RESTful em Python, além do desenvolvimento de testes unitários e de integração, assegurando a qualidade e a estabilidade das aplicações. Antes disso, atuei como desenvolvedor de software fullstack, criando soluções personalizadas com Machine Learning para prever tendências, identificar padrões e gerar relatórios estratégicos que apoiaram a tomada de decisões baseada em dados.
            </p>
            
            <p>
              Sou um profissional orientado à inovação e à excelência técnica, com expertise que abrange desde o desenvolvimento web e mobile até a aplicação prática de inteligência artificial, sempre buscando soluções eficazes e escaláveis para desafios complexos.
            </p>

            <div className="skills-preview">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;