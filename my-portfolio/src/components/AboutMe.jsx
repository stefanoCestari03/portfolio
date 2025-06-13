import React from 'react';
import profilePic from '../assets/profile.jpg';
import '../App.css'; // Assicurati di avere il file CSS per lo stile del componente
// import backgroundImage from '../assets/background-card.jpg'; // RIMUOVI QUESTA RIGA

const AboutMe = () => {
  return (
    <div className="card about-me"> {/* NESSUN CAMBIO QUI */}
      <img src={profilePic} alt="La tua foto profilo" className="profile-photo" />
      <h2>Ciao, sono [Il Tuo Nome]</h2>
      <p>
        Sono un/a [La Tua Professione/Ruolo, es. Sviluppatore Frontend, Designer UI/UX, Studente di Informatica] con una passione per [i tuoi interessi nel campo, es. creare interfacce utente intuitive, risolvere problemi complessi con il codice]. Questo portfolio è un piccolo assaggio dei miei lavori e delle mie competenze. Sono sempre alla ricerca di nuove sfide e opportunità per crescere.
      </p>
      <p>
        Nel mio tempo libero, mi piace [un hobby o un interesse, es. esplorare nuove tecnologie, fare escursioni, leggere di sviluppo web]. Credo fermamente che l'apprendimento continuo sia la chiave del successo.
      </p>
    </div>
  );
};

export default AboutMe;