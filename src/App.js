import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import Film from './components/Film';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulando un tiempo de carga, puedes sustituir esto con tu lógica real de carga.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Works />
          <Film />
          <Contact />
           <Footer /> 
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;
