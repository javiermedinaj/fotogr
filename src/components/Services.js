import React from 'react';
import { motion } from 'framer-motion';

const ServicesComponent = () => {
  const slideUp = {
    initial: {
      y: "100%",
    },
    open: {
      y: "0%",
      transition: { duration: 0.5 },
    },
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row bg-slate-300 gap-2  pt-10 pb-10">
      {/* Primera columna */}
      <div className="md:w-1/3 bg-gray-200 p-4 ">
        <h2 className="text-4xl font-bold mb-4 text-center">Services</h2>
      </div>

      {/* Segunda columna */}
      <div className="md:w-2/3 pl-4 pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Servicio 1 */}
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="open"
            exit="closed"
            className="bg-gray-100 p-4 "
          >
            <motion.h3 className="text-lg font-semibold mb-2" variants={opacity}>Service 1</motion.h3>
            <motion.p variants={opacity}>Description of Service 1</motion.p>
          </motion.div>
          {/* Servicio 2 */}
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="open"
            exit="closed"
            className="bg-gray-100 p-4"
          >
            <motion.h3 className="text-lg font-semibold mb-2" variants={opacity}>Service 2</motion.h3>
            <motion.p variants={opacity}>Description of Service 2</motion.p>
          </motion.div>
          {/* Y así sucesivamente para los demás servicios */}
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="open"
            exit="closed"
            className="bg-gray-100 p-4 "
          >
            <motion.h3 className="text-lg font-semibold mb-2" variants={opacity}>Service 2</motion.h3>
            <motion.p variants={opacity}>Description of Service 2</motion.p>
          </motion.div>
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="open"
            exit="closed"
            className="bg-gray-100 p-4 "
          >
            <motion.h3 className="text-lg font-semibold mb-2" variants={opacity}>Service 2</motion.h3>
            <motion.p variants={opacity}>Description of Service 2</motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;