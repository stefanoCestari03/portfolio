    import React from 'react';

    // Dati delle tue qualifiche
    const qualificationsData = [
  {
    id: 1,
    title: 'High School Diploma - Computer Science Expert', // Updated title for clarity
    institution: 'Istituto Tecnico Marie Curie Pergine',
    year: '2017 - 2022',
    description: [
      'The two-year common curriculum focused on technical-scientific subjects. I then chose a three-year specialization in Computer Science, where I deepened my knowledge in:',
      'Study of network protocols and Cisco configurations in the lab.',
      'Basic programming in languages such as Java and C.',
      'Web programming with PHP, JavaScript, CSS, and HTML.',
      'Use and management of databases with SQL.',
      'Knowledge of business dynamics.',
      'Robotics with practical labs.',
      'Project management, with practical experience in developing an Arduino board for home automation and its web interface.'
    ]
  },
  {
    id: 2,
    title: 'Higher Technical Education Course', // More generic title for higher education
    institution: 'Marconi Altaformazione Tecnologica',
    year: 'Two-year program 2023 - 2025',
    description: `I completed an intensive two-year post-diploma course at Istituto Marconi, specializing in software development and networks. I gained solid skills in Java, Python, HTML, CSS, JavaScript, and frameworks such as Angular (studied in class) and React (self-taught in my free time). The program included in-depth studies on databases (MySQL), network protocols, cloud computing (AWS), and virtualization (VMware). I participated in real projects with companies (FBK, GPI) and attended cybersecurity and project management courses, with internship opportunities in the region.`
  },
  // You can add other qualifications if needed
  // {
  //   id: 3,
  //   title: 'Certification in [Certification Name]',
  //   institution: '[Certification Body]',
  //   year: '[Year]',
  //   description: 'I obtained this certification to validate my skills in [specific area].'
  // }
];

    const Qualifications = () => {
      return (
        // Utilizziamo la classe "card" per lo stile generale del contenitore
        <div className="card">
          <h3>Qualifications and Education</h3>
          <div className="grid-container"> {/* Riusiamo la griglia per un layout coerente */}
            {qualificationsData.map((qualification) => (
              <div key={qualification.id} className="qualification-card"> {/* Nuova classe per stile specifico */}
                <h4>{qualification.title}</h4>
                <p><strong>Institution:</strong> {qualification.institution}</p>
                <p><strong>Year:</strong> {qualification.year}</p>
                <p>{qualification.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default Qualifications;
    