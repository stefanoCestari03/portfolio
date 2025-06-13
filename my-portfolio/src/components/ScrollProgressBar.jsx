import React, { useEffect, useRef } from 'react'; // Rimuovi useState, non più necessario senza il pallino
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll(); // Hook di Framer Motion per lo stato di scroll

  // Questa spring controlla la larghezza della barra.
  // Puoi regolare 'stiffness' e 'damping' qui se vuoi cambiare la fluidità della barra.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150, // Diminuisci per rendere la barra più "elastica" nel riempimento
    damping: 50,    // Aumenta per smorzare l'oscillazione
    restDelta: 0.001
  });

  // I ref e gli useEffect per la posizione del pallino non sono più necessari.
  // const progressBarRef = useRef(null);
  // const [dotXPosition, setDotXPosition] = useState(0);
  // useEffect per il pallino è stato rimosso.


  return (
    <div className="scroll-progress-container">
      {/* La barra di avanzamento - QUESTO È L'UNICO ELEMENTO CHE RIMANE */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }} // Collega la scala X al progresso dello scroll
        // Puoi aggiungere un delay qui se vuoi che la barra appaia con un ritardo iniziale
        // transition={{ delay: 0.5 }}
      />

    </div>
  );
};

export default ScrollProgressBar;