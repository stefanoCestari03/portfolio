import React from 'react';

const hardSkillsData = [
  { name: 'HTML', category: 'Frontend', level: 'Advanced', icon: 'fab fa-html5' },
  { name: 'CSS', category: 'Frontend', level: 'Advanced', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', category: 'Languages', level: 'Advanced', icon: 'fab fa-js-square' },
  { name: 'React', category: 'Frontend Framework', level: 'Intermediate', icon: 'fab fa-react' },
  { name: 'Node.js', category: 'Backend', level: 'Basic', icon: 'fab fa-node-js' },
  { name: 'Python', category: 'Scripting Language', level: 'Intermediate', icon: 'fab fa-python' },
  { name: 'Git', category: 'Tools', level: 'Advanced', icon: 'fab fa-git-alt' },
  { name: 'SQL', category: 'Database', level: 'Intermediate', icon: 'fas fa-database' },
  { name: 'Vite', category: 'Tools', level: 'Intermediate', icon: 'fas fa-bolt' },
  { name: 'Angular', category: 'Frontend Framework', level: 'Intermediate', icon: 'fab fa-angular' },
  { name: 'Cisco IOS', category: 'Networking', level: 'Intermediate', icon: 'fas fa-network-wired' },
  { name: 'Spring Boot', category: 'Backend Framework', level: 'Intermediate', icon: 'fas fa-leaf' }, // Aggiunto Spring Boot
];

const HardSkills = () => {
  return (
    <div className="card">
      <h3>Hard Skills</h3>
      <div className="grid-container">
        {hardSkillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h4>{skill.name}</h4>
            <p>Category: {skill.category}</p>
            <p>Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;