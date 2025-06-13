import React from 'react';

const hardSkillsData = [
  { name: 'HTML', category: 'Frontend', level: 'Avanzato' },
  { name: 'CSS', category: 'Frontend', level: 'Avanzato' },
  { name: 'JavaScript', category: 'Linguaggi', level: 'Avanzato' },
  { name: 'React', category: 'Framework Frontend', level: 'Intermedio' },
  { name: 'Node.js', category: 'Backend', level: 'Base' },
  { name: 'Python', category: 'Linguaggi', level: 'Intermedio' },
  { name: 'Git', category: 'Strumenti', level: 'Avanzato' },
  { name: 'SQL', category: 'Database', level: 'Base' },
  { name: 'Vite', category: 'Strumenti', level: 'Intermedio' },
  { name: 'Next.js', category: 'Framework Frontend', level: 'Base' },
];

const HardSkills = () => {
  return (
    <div className="card">
      <h3>Le Mie Hard Skills</h3>
      <div className="grid-container">
        {hardSkillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h4>{skill.name}</h4>
            <p>Categoria: {skill.category}</p>
            <p>Livello: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;