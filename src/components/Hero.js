import React, { useState, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-screen dark:bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
        playsInline
      >
        <source src="/video1.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="absolute text-center text-white w-full p-4">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
         S3 Studios
        </p>
        <h1 className="text-lg md:text-xl lg:text-2xl mb-6">
          Based in Uruguay 
        </h1>
        <button onClick={togglePlay} className="bg-gray-600 text-white px-4 py-2 rounded">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {/* Add more text or buttons as needed */}
      </div>
    </div>
  );
};

export default Hero;
