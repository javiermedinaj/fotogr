import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className=" mx-auto px-4 py-8 dark:bg-zinc-950 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Sobre Nosotros</h2>
        <p className="text-lg mb-6">
          Somos Maxi Segredo y Felipe Benoit. Hace años que trabajamos en la fotografía y video y nos apasiona cada vez que lo hacemos. Somos un equipo conformado por jóvenes con muchas ganas, ambición y entrega pero con una actitud muy responsable y comprometida frente a este acontecimiento tan importante, que quedará guardado para el resto de sus vidas.
        </p>
        <p className="text-lg  mb-6">
          Antes que nada, de parte de todo el equipo, queremos felicitarlos por este paso que dan como pareja. Por eso queremos desearles lo mejor para esta nueva etapa. Para nosotros va a ser más que un placer acompañarlos y estar al lado de ustedes en uno de los días más importantes de sus vidas!
        </p>
        <p className="text-lg mb-6">
          Desde que arranca el día con la preparación de cada uno de ustedes, nos caracterizamos por transmitir buena energía y estar presentes en todo momento para que después puedan ver un producto final completo y no se pierdan ni se olviden de nada!
        </p>
        <p className="text-lg mb-6">
          Nuestra filosofía de trabajo es ser uno más en la fiesta, pasarla bien y no estar pidiendo fotos sino generarlas. Nos enfocamos en conseguir y generar una confianza y conexión especial, principalmente con la pareja, desde que hacemos las fotos de la pre-boda para que puedan sentirse cómodos y distendidos el día del evento.
        </p>
        <p className="text-lg  mb-6">
          Para todos nuestros paquetes el servicio consta de 12hs de cobertura, desde la preparación de los novios hasta la hora de finalización del evento.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
