import React from 'react';
import { motion } from 'framer-motion';
import videos from '../data/Videos.json';

const FilmView = () => {
  // Variante para animaciones de imágenes
  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className="flex flex-wrap justify-center pt-10 pb-10 bg-slate-300 ">
      {videos.videos.map((video, index) => (
        <motion.div
          className="flex flex-col items-center p-5 border-t border-solid border-slate-200 cursor-pointer transition-all w-80 mx-4 mb-8"
          key={`video_${index}`}
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
          whileHover="hover"
        >
          <motion.video
            src={video.enlace}
            autoPlay
            loop
            muted
            initial="rest"
            animate="rest"
            variants={imageVariants}
            className="w-full mb-4 transition-transform"
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl p-1 font-semibold mb-0 transition-all">{video.nombre}</h2>
            <p className="font-light mb-0 p-2 transition-all">Descripción del video Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus felis.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
              <a href="https://www.instagram.com/sybstudios/reels/" target="_blank" rel="noopener noreferrer">
                Ver más
              </a>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FilmView;
