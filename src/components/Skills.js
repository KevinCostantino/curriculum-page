import React from 'react';
import './Skills.css';

const Skills = () => {
  // Dados das habilidades
  const skills = [
    { name: 'Python', level: 3, color: '#4285F4' },
    { name: 'C#', level: 2, color: '#9C27B0' },
    { name: 'MySQL', level: 1, color: '#FF9800' },
    { name: 'Machine Learning', level: 2, color: '#0F9D58' },
    { name: 'React', level: 2, color: '#61DAFB' },
    { name: 'Javascript', level: 4, color: '#3178C6' },
    { name: 'PHP', level: 1, color: '#3178C6' },
  ];

  // Configurações do gráfico
  const layers = 5;
  const centerX = 100;
  const centerY = 100;
  const maxRadius = 80;
  const angleStep = (2 * Math.PI) / skills.length;

  // Função para gerar um caminho de arco circular
  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
    return [
      "M", x, y,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  // Converter coordenadas polares para cartesianas
  const polarToCartesian = (x, y, radius, angle) => {
    return {
      x: x + (radius * Math.sin(angle)),
      y: y - (radius * Math.cos(angle))
    };
  };

  return (
    <section id="skills" className="section">
      <h2>Habilidades</h2>
      <p>
        Possuo experiência em desenvolvimento Fullstack, trabalhando com diversas tecnologias e ferramentas para criar
        soluções eficientes e escaláveis. Minha stack inclui:
      </p>
      
      <div className="skills-container">
        <svg viewBox="0 0 200 200" className="skills-radar">
          {/* Fundo branco */}
          <circle cx={centerX} cy={centerY} r={maxRadius} fill="white" />
          
          {/* Camadas de fundo (círculos concêntricos) */}
          {[...Array(layers)].map((_, layerIndex) => (
            <circle
              key={`layer-${layerIndex}`}
              cx={centerX}
              cy={centerY}
              r={(maxRadius / layers) * (layerIndex + 1)}
              fill="none"
              stroke="#eee"
              strokeWidth="1"
            />
          ))}
          
          {/* Divisórias entre habilidades (linhas) */}
          {skills.map((_, index) => {
            const angle = index * angleStep;
            const x = centerX + Math.sin(angle) * maxRadius;
            const y = centerY - Math.cos(angle) * maxRadius;
            
            return (
              <line
                key={`divider-${index}`}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#ddd"
                strokeWidth="0.5"
              />
            );
          })}
          

          
          {/* Áreas preenchidas (habilidades) */}
          {skills.map((skill, index) => {
            const startAngle = index * angleStep;
            const endAngle = (index + 1) * angleStep;
            const radius = (maxRadius / layers) * skill.level;
            const labelRadius = maxRadius + 16;
            
            return (
              <g key={`skill-${index}`}>
                <path
                  d={describeArc(centerX, centerY, radius, startAngle, endAngle)}
                  fill={skill.color}
                  stroke={skill.color}
                  strokeWidth="0.5"
                  opacity="0.8"
                />
                
                {/* Label da habilidade */}
                <text
                  x={centerX + Math.sin(startAngle + angleStep/2) * labelRadius}
                  y={centerY - Math.cos(startAngle + angleStep/2) * labelRadius}
                  textAnchor="middle"
                  fontSize="7"
                  fill="#333"
                  fontWeight="bold"
                >
                  {skill.name}
                </text>
              </g>
            );
          })}
        </svg>
        
        {/* Legenda */}
        <div className="skills-legend">
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <span 
                  className="skill-color-marker" 
                  style={{ backgroundColor: skill.color }}
                />
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}/5</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;