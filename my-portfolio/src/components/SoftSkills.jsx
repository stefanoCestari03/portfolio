import React from 'react';

const softSkillsData = [
  { name: 'Communication', description: 'Ability to express ideas clearly and listen actively.' },
  { name: 'Problem Solving', description: 'Analytical approach to identify and resolve challenges.' },
  { name: 'Teamwork', description: 'Effective collaboration with others to achieve common goals.' },
  { name: 'Adaptability', description: 'Flexibility in managing changes and new situations.' },
  { name: 'Critical Thinking', description: 'Objective analysis of information to make informed decisions.' },
  { name: 'Time Management', description: 'Ability to organize and prioritize tasks.' },
  { name: 'English Language', description: 'Proficiency Level: B2+ (IELTS certification)' }, // Modificato qui
];

const SoftSkills = () => {
  return (
    <div className="card">
      <h3>Soft Skills</h3>
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