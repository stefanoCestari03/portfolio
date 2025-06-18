import React from 'react';
import profilePic from '../assets/profile.jpg';
import linkedinIcon from '../assets/linkedin-icon.png'; // RIMUOVI QUESTA RIGA SE NON USI L'ICONA
import '../App.css'; // Assicurati di avere il file CSS per lo stile del componente
// import backgroundImage from '../assets/background-card.jpg'; // RIMUOVI QUESTA RIGA

const AboutMe = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/stefano-cestari-a7a730264/';
  return (
    <div className="card about-me"> {/* NESSUN CAMBIO QUI */}
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" ><img src={profilePic} alt="La tua foto profilo" className="profile-photo" /></a>
      {/* Nuovo loghetto LinkedIn sotto la foto profilo */}
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedin-icon-link">
        <img src={linkedinIcon } alt="La tua foto profilo" className="linkedin-icon" />
      </a>

      <h2>Hi! I am Stefano Cestari</h2>
      <p>
        I'm a Technical IT Specialist with a strong passion for ICT and a proven background in cybersecurity operations. My expertise lies in critical SOC L1 analysis, incident triage, and SIEM rule management, ensuring robust system security. This portfolio also highlights my hands-on experience in designing and configuring resilient network infrastructures, including Cisco network configurations. Furthermore, I've developed efficient software solutions through Spring Boot backend development and React/Angular frontend work. I'm constantly seeking new challenges and opportunities to grow and apply my diverse skill set.
      </p>
      <p>
       Outside of work, I enjoy music (and playing instruments i like guitair and sing), sports (like volleyball and gym workouts), mountain excursions, and travel. I firmly believe that continuous learning is key to success.
      </p>
    </div>
  );
};

export default AboutMe;