import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <br /><br /><br /><br /><br />
      <h2>Experiências</h2>
      <div className="experience-container">
        <div className="experience-box">
          <h3>06/2022 - 12/2023 : INOVISÃO (UCDB)</h3>
          <p><strong>Área de atuação:</strong> Pesquisa e produção de IA</p>
          <p><strong>Atividade:</strong> Voluntário</p>
          <p><strong>Duração:</strong> 1 ano e 6 meses</p>
          <ul>
            <li>Implementação e manutenção de APIs RESTful para integração com sistemas internos</li>
            <li>Atuação com linguagens e bibliotecas como Python e Pandas</li>
            <li>Monitoramento do desempenho do sistema em execução</li>
          </ul>
        </div>

        <div className="experience-box">
          <h3>01/2024 - Presente : Elettrica Solar</h3>
          <p><strong>Área de atuação:</strong> Desenvolvedor e assistente administrativo</p>
          <p><strong>Atividade:</strong> Tempo Integral</p>
          <p><strong>Duração:</strong> 6+ meses</p>
          <ul>
            <li>Criação de programa Python de gerenciamento de dados</li>
            <li>Projeção e implementação de interfaces para análise de dados</li>
            <li>Desenvolvimento de soluções personalizadas</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;