// Loader.js

import React from "react";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
  const galleryImages = [
    "5.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
    // Agrega más imágenes según sea necesario
  ];

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const itemMain = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",  // Cambiado a un valor de easing válido
        duration: 1.6,
      },
    },
  };
  

  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {galleryImages.map((image, index) => (
          <ImageBlock
            key={index}
            variants={item}
            id={`image-${index + 1}`}
            imageSrc={`/${image}`}  
          />
        ))}
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layout={{ id: "main-image-1" }}  
            src={`/${galleryImages[1]}`}
            alt="Main Image"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ImageBlock = ({ variants, id, imageSrc }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id} relative overflow-hidden`}
      layout
    >
      <img
        src={imageSrc}
        alt={id}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Loader;
