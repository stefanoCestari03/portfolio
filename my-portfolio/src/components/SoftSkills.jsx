import React from 'react';

const softSkillsData = [
  { name: 'Comunicazione', description: 'Capacità di esprimere idee in modo chiaro e ascoltare attivamente.' },
  { name: 'Problem Solving', description: 'Approccio analitico per identificare e risolvere le sfide.' },
  { name: 'Lavoro di Squadra', description: 'Collaborazione efficace con gli altri per raggiungere obiettivi comuni.' },
  { name: 'Adattabilità', description: 'Flessibilità nel gestire cambiamenti e nuove situazioni.' },
  { name: 'Pensiero Critico', description: 'Analisi obiettiva delle informazioni per prendere decisioni informate.' },
  { name: 'Gestione del Tempo', description: 'Capacità di organizzare e prioritizzare le attività.' },
];

const SoftSkills = () => {
  return (
    <div className="card">
      <h3>Le Mie Soft Skills</h3>
      <div className="grid-container">
        {softSkillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;