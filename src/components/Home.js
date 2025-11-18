import React from 'react';
import './Home.css';
import fotoCurriculo from './media/foto_curriculo.jpeg';
import { FaCode, FaDatabase, FaReact, FaPython, FaJsSquare, FaCogs } from 'react-icons/fa';

const Home = () => {
  const skills = ['Python', 'React', 'JavaScript', 'C#', 'Machine Learning', 'APIs RESTful'];

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
              Graduado em Engenharia de Computação com ampla experiência no desenvolvimento de
              software e na criação de soluções tecnológicas avançadas.
            </p>
            
            <p>
              Na minha posição mais recente, fui responsável pela implementação e manutenção de APIs RESTful,
              garantindo a integração eficiente entre sistemas internos e externos. Meu trabalho incluiu o uso de
              linguagens e frameworks como Python, além do desenvolvimento de testes unitários e de integração,
              assegurando a qualidade e a estabilidade das aplicações.
            </p>
            
            <p>
              Anteriormente, atuei como Software Developer, projetando e implementando modelos de
              inteligência artificial voltados para a análise de dados complexos. Desenvolvi soluções
              personalizadas para predição de tendências e identificação de padrões, além de elaborar relatórios
              estratégicos que forneceram insights valiosos para a tomada de decisões.
            </p>
            
            <p>
              Sou um profissional orientado à inovação e à excelência técnica, com habilidades que vão do
              desenvolvimento de software à aplicação prática de inteligência artificial, sempre buscando soluções
              eficazes para problemas desafiadores.
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