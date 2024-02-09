import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Works from './pages/Works'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div key="loader">
          <Loader setIsLoading={setIsLoading} />
        </motion.div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/works/" element={<Works />} />
          </Routes>
        </Router>
      )}
    </AnimatePresence>
  );
};

export default App;