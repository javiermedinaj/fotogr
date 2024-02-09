import React from 'react';
import { motion } from 'framer-motion';
import fotos from '../data/Fotos.json';


const WorkPage = () => {
  const imageVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <main>
     <div className="flex flex-wrap justify-center pt-10 pb-10 bg-slate-300 ">
  {fotos.fotos.map((foto, index) => (
    <motion.div
      className="flex flex-col items-center p-5 border-t border-solid border-gray-00 cursor-pointer transition-all w-80 mx-4 mb-8"
      key={`foto_${index}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover="hover"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={foto.enlace}
        alt={foto.nombre}
        width={300}
        height={300}
        variants={imageVariants}
        initial="rest"
        animate="rest"
        className="transition-transform mb-4"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl p-1 font-semibold mb-0 transition-all">{foto.nombre}</h2>
        <p className="font-light mb-0 p-2 transition-all">Fotografía de boda</p>
      </div>
    </motion.div>
  ))}
</div>

    </main>
  );
};

export default WorkPage;
