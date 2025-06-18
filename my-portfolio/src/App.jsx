import React from 'react';
import './index.css';
import './App.css';

import AboutMe from './components/AboutMe';
import SoftSkills from './components/SoftSkills';
import HardSkills from './components/HardSkills';
import Qualifications from './components/Qualifications '; // Sezione opzionale, puoi rimuoverla se non la usi
import ScrollProgressBar from './components/ScrollProgressBar';
import backgroundImage from './assets/background-card1.jpg'; // Importa l'immagine qui

function App() {
  // Imposta la variabile CSS per l'immagine di sfondo
  const appBackgroundStyle = {
    '--app-bg-image': `url(${backgroundImage})`
  };

  return (
    <div className="app" style={appBackgroundStyle}> {/* Applica lo stile qui */}
      {/* <header className="header">
        <h1>Il Mio Portfolio</h1>
      </header> */}
      <div className="container">
        <AboutMe />
        <HardSkills />
        <SoftSkills />
        <Qualifications />
        
        {/* Sezioni di prova per lo scroll, se ancora presenti
        <div style={{ height: '800px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p style={{fontSize: '1.5em', color: '#eee'}}>Sezione di prova per scroll</p>
        </div>
        <div style={{ height: '600px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p style={{fontSize: '1.5em', color: '#eee'}}>Un'altra sezione di prova</p>
        </div> */}
      </div>

      <ScrollProgressBar />

      <footer className="footer">
        <p>&copy; 2025 Cestari Stefano. ICT.</p>
      </footer>
    </div>
  );
}

export default App;