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
      period: '01/2024 - 12/2024',
      company: 'Elettrica Solar',
      role: 'Desenvolvedor e assistente administrativo',
      duration: '1 ano',
      area: 'Desenvolvimento e assistência administrativa',
      type: 'Tempo Integral',
      activities: [
        'Criação de programa Python de gerenciamento de dados dos clientes que negociaram com a empresa',
        'Projeção e implementação de interfaces para análise de dados para usuários da empresa',
        'Desenvolvimento de soluções personalizadas para atender às necessidades específicas de clientes e projetos, como predição de tendências e identificação de padrões em grandes volumes de dados'
      ],
      icon: '⚡'
    },
    {
      period: '05/2025 - 11/2025',
      company: 'Globoo',
      role: 'Desenvolvedor Front-End',
      duration: '6 meses',
      area: 'Desenvolvimento Front-End',
      type: 'Tempo Integral',
      activities: [
        'Implementei novas funcionalidades e melhorias visuais na aplicação da empresa, desde mudança de estilo de um cabeçalho até seções inteiras da aplicação tanto na versão web quanto mobile',
        'Desenvolvi a aplicação utilizando TypeScript e Angular para atender às demandas de negócios e requisitos de projetos',
        'Corrigi erros e problemas relatados por usuários.',
        'Realizei testes para garantir a funcionalidade adequada das correções implementadas'

      ],
      icon: '🌐'
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