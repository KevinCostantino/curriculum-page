import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: '06/2022 - 12/2023',
      company: 'INOVISÃO (UCDB)',
      role: 'Pesquisador de IA - Voluntário',
      duration: '1 ano e 6 meses',
      area: 'Pesquisa e produção de IA',
      type: 'Voluntário',
      activities: [
        'Implementação e manutenção de APIs RESTful para integração com sistemas internos',
        'Atuação com linguagens e bibliotecas como Python e Pandas',
        'Monitoramento do desempenho do sistema em execução',
        'Desenvolvimento de modelos de machine learning',
        'Análise de dados e geração de insights'
      ],
      icon: '🔬'
    },
    {
      period: '01/2024 - Presente',
      company: 'Elettrica Solar',
      role: 'Desenvolvedor Full Stack',
      duration: '11+ meses',
      area: 'Desenvolvimento e administração',
      type: 'Tempo Integral',
      activities: [
        'Criação de programa Python de gerenciamento de dados',
        'Projeção e implementação de interfaces para análise de dados',
        'Desenvolvimento de soluções personalizadas',
        'Otimização de processos administrativos',
        'Integração de sistemas e APIs'
      ],
      icon: '⚡'
    }
  ];

  return (
    <section id="experience">
      <h2>Experiências Profissionais</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-box">
            <div className="timeline">
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <div className="timeline-role">{exp.role}</div>
              </div>
            </div>
            
            <h3>{exp.company}</h3>
            
            <div className="experience-details">
              <p><strong>Área de atuação:</strong> {exp.area}</p>
              <p><strong>Tipo:</strong> {exp.type}</p>
              <p><strong>Duração:</strong> {exp.duration}</p>
            </div>
            
            <ul>
              {exp.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;