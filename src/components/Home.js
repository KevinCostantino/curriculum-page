import React from 'react';
import './Home.css';
import fotoCurriculo from './media/foto_curriculo.jpeg';
import Seta_1 from './media/Seta_1.png';
import Seta_2 from './media/Seta_2.png';
import Seta_3 from './media/Seta_3.png';
import Seta_4 from './media/Seta_4.png';

const Home = () => {
  return (
    <section id="home" className="section">
      {/* Wrapper for Image and Banner */}


      <div className="image-wrapper">
        <img src={fotoCurriculo} alt="Kevin Nicolas Costantino" className="profile-image" />
        <img src={Seta_1} alt="Kevin Nicolas Costantino" className="Seta1" />
        <img src={Seta_2} alt="Kevin Nicolas Costantino" className="Seta2" />
        <img src={Seta_3} alt="Kevin Nicolas Costantino" className="Seta3" />
        <img src={Seta_4} alt="Kevin Nicolas Costantino" className="Seta4" />
        <div style={{sfontFamily: 'Fascinate, cursive' }} className="Textaum"> 
   PASSE O MOUSE 
   <br />POR CIMA
</div>

        <div className="banner">
          <span className="banner-text">
          <br />
            <h1>Kevin Nicolas Costantino</h1>
            <h2 style={{ fontSize: '13px' }}>Engenheiro da Computação e Desenvolvedor</h2>
            <br />
            <br />
            
            <p style={{ paddingLeft: '180px' }}>
              Graduado em Engenharia de Computação, adquiri ampla experiência no desenvolvimento de
              software e na criação de soluções tecnológicas avançadas.
            </p>
            <p style={{ paddingLeft: '180px' }}>
              Na minha posição mais recente, fui responsável pela implementação e manutenção de APIs RESTful,
              garantindo a integração eficiente entre sistemas internos e externos. Meu trabalho incluiu o uso de
              linguagens e frameworks como Python, além do desenvolvimento de testes unitários e de integração,
              assegurando a qualidade e a estabilidade das aplicações.
            </p>
            <p style={{ paddingLeft: '180px' }}>
              Anteriormente, atuei como Software Developer, projetando e implementando modelos de
              inteligência artificial voltados para a análise de dados complexos. Nessa função, desenvolvi soluções
              personalizadas para predição de tendências e identificação de padrões, além de elaborar relatórios
              estratégicos que forneceram insights valiosos para a tomada de decisões.
            </p>
            <p style={{ paddingLeft: '180px' }}>
              Sou um profissional orientado à inovação e à excelência técnica, com habilidades que vão do
              desenvolvimento de software à aplicação prática de inteligência artificial, sempre buscando soluções
              eficazes para problemas desafiadores.
            </p>

          </span>

        </div>

      </div>
      
    </section>
    
  );
};

export default Home;