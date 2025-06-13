import React from 'react';
import './index.css';
import './App.css';

import AboutMe from './components/AboutMe';
import SoftSkills from './components/SoftSkills';
import HardSkills from './components/HardSkills';
import ScrollProgressBar from './components/ScrollProgressBar'; // Importa il nuovo componente

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Il Mio Portfolio</h1>
      </header>
      <div className="container">
        <AboutMe />
        <SoftSkills />
        <HardSkills />
        {/* Aggiungi qui le altre sezioni come "Progetti" e "Contatti" per testare lo scroll */}
        {/* Esempio di sezione aggiuntiva per rendere la pagina scrollabile */}
        <div style={{ height: '800px', backgroundColor: '#ecf0f1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p style={{fontSize: '1.5em', color: '#7f8c8d'}}>Sezione di prova per scroll</p>
        </div>
        <div style={{ height: '600px', backgroundColor: '#ecf0f1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p style={{fontSize: '1.5em', color: '#7f8c8d'}}>Un'altra sezione di prova</p>
        </div>
      </div>

      <ScrollProgressBar /> {/* Aggiungi il componente della barra di avanzamento qui */}

      <footer className="footer">
        <p>&copy; 2025 [Il Tuo Nome]. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

export default App;