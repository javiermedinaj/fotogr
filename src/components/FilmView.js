import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import videos from '../data/Videos.json';

const FilmView = () => {
  // Estado para controlar la reproducción de los videos, inicializado como falso para que los videos comiencen pausados
  const [isVideoPlaying, setIsVideoPlaying] = useState(Array(videos.videos.length).fill(false));
  const videoRefs = useRef(Array(videos.videos.length).fill(null));

  // Función para cargar el video y establecer su referencia
  const handleVideoLoad = (index, videoElement) => {
    videoRefs.current[index] = videoElement;
  };

  // Función para reproducir o pausar un video
  const toggleVideo = (index) => {
    const newIsVideoPlaying = isVideoPlaying.map((value, idx) => idx === index ? !value : false);
    setIsVideoPlaying(newIsVideoPlaying);

    // Reproducir o pausar el video según el estado
    if (newIsVideoPlaying[index]) {
      videoRefs.current[index].play();
    } else {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div className="flex flex-wrap justify-center pt-10 pb-10 bg-slate-300">
      {videos.videos.map((video, index) => (
        <div
          className="flex flex-col items-center p-5 border-t border-solid border-slate-200 cursor-pointer transition-all w-80 mx-4 mb-8"
          key={`video_${index}`}
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.video
            ref={(el) => handleVideoLoad(index, el)} // Establecer la referencia del video
            src={video.enlace}
            autoPlay={false} // Desactivar la reproducción automática
            loop
            muted
            className="w-full mb-4 transition-transform"
            onClick={() => toggleVideo(index)} // Agregamos onClick para pausar/reproducir al hacer clic
            style={{ filter: 'brightness(0.5)' }} // Aplicamos un filtro de brillo para indicar que el video está pausado
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl p-1 font-semibold mb-0 transition-all">{video.nombre}</h2>
            <p className="font-light mb-0 p-2 transition-all">Descripción del video Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus felis.</p>
            {isVideoPlaying[index] ? (
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4" onClick={() => toggleVideo(index)}>
                Pausar
              </button>
            ) : (
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4" onClick={() => toggleVideo(index)}>
                Reproducir
              </button>
            )}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
              <a href="https://www.instagram.com/sybstudios/reels/" target="_blank" rel="noopener noreferrer">
                Ver más
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmView;
