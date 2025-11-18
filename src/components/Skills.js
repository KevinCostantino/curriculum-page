import React from 'react';
import './Skills.css';

const Skills = () => {
  // Dados das habilidades com experiência
  const skills = [
    { name: 'Python', level: 3, color: '#3776ab', experience: '3+ anos', category: 'Backend' },
    { name: 'C#', level: 2, color: '#9C27B0', experience: '2 anos', category: 'Backend' },
    { name: 'MySQL', level: 1, color: '#4479A1', experience: '1 ano', category: 'Database' },
    { name: 'Machine Learning', level: 2, color: '#0F9D58', experience: '2 anos', category: 'AI/ML' },
    { name: 'React', level: 2, color: '#61DAFB', experience: '2 anos', category: 'Frontend' },
    { name: 'Javascript', level: 4, color: '#F7DF1E', experience: '4+ anos', category: 'Frontend' },
    { name: 'PHP', level: 1, color: '#777BB4', experience: '1 ano', category: 'Backend' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'AI/ML'];

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
      <div className="skills-header">
        <h2>Habilidades & Tecnologias</h2>
        <p>
          Experiência em desenvolvimento Fullstack com foco em soluções inovadoras e escaláveis.
          Especializado em tecnologias modernas e metodologias ágeis.
        </p>
      </div>
      
      {/* Categorias de skills */}

      
      <div className="skills-container">
        <div className="radar-container">

          <div className="radar">
          <svg viewBox="0 0 200 200" className="skills-radar">
            {/* Gradiente de fundo */}
            <defs>
              <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(102, 126, 234, 0.1)" />
                <stop offset="100%" stopColor="rgba(118, 75, 162, 0.05)" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>
            </defs>
            
            {/* Fundo com gradiente */}
            <circle cx={centerX} cy={centerY} r={maxRadius} fill="url(#radarGradient)" />
            
            {/* Camadas de fundo (círculos concêntricos) */}
            {[...Array(layers)].map((_, layerIndex) => (
              <circle
                key={`layer-${layerIndex}`}
                cx={centerX}
                cy={centerY}
                r={(maxRadius / layers) * (layerIndex + 1)}
                fill="none"
                stroke="rgba(102, 126, 234, 0.2)"
                strokeWidth="1"
                className="radar-layer"
                style={{ animationDelay: `${layerIndex * 0.2}s` }}
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
          

          
          {/* Áreas preenchidas (habilidades) com animação */}
          {skills.map((skill, index) => {
            const startAngle = index * angleStep;
            const endAngle = (index + 1) * angleStep;
            const radius = (maxRadius / layers) * skill.level;
            const labelRadius = maxRadius + 16;
            
            return (
              <g key={`skill-${index}`} className="skill-segment">
                <path
                  d={describeArc(centerX, centerY, radius, startAngle, endAngle)}
                  fill={skill.color}
                  stroke={skill.color}
                  strokeWidth="1"
                  opacity="0.8"
                  filter="url(#glow)"
                  className="skill-path"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
                
                {/* Borda externa para destaque */}
                <path
                  d={describeArc(centerX, centerY, radius, startAngle, endAngle)}
                  fill="none"
                  stroke={skill.color}
                  strokeWidth="2"
                  opacity="0.6"
                  className="skill-border"
                />
                
                {/* Label da habilidade */}
                <text
                  x={centerX + Math.sin(startAngle + angleStep/2) * labelRadius}
                  y={centerY - Math.cos(startAngle + angleStep/2) * labelRadius}
                  textAnchor="middle"
                  fontSize="6.5"
                  fill="#2c3e50"
                  fontWeight="600"
                  className="skill-label"
                >
                  {skill.name}
                </text>
              </g>
            );
          })}
          </svg>
          <div className="radar-center-info">
            <div className="total-skills">{skills.length}</div>
            <div className="center-label">Skills</div>
          </div>
        </div>
                  <div className="skills-categories">
        {categories.map(category => {
          const categorySkills = skills.filter(skill => skill.category === category);
          const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
          return (
            <div key={category} className="category-badge">
              <span className="category-name">{category}</span>
              <div className="category-progress">
                <div 
                  className="category-fill" 
                  style={{ width: `${(avgLevel / 5) * 100}%` }}
                />
              </div>
              <span className="category-level">{avgLevel.toFixed(1)}/5</span>
            </div>
          );
        })}
      </div>
          </div>

        {/* Legenda melhorada */}
        <div className="skills-legend">
          <h3>Níveis de Proficiência</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-info">
                  <span 
                    className="skill-color-marker" 
                    style={{ backgroundColor: skill.color }}
                  />
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                </div>
                <div className="skill-metrics">
                  <span className="skill-experience">{skill.experience}</span>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-fill" 
                      style={{ 
                        width: `${(skill.level / 5) * 100}%`,
                        backgroundColor: skill.color 
                      }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}/5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;