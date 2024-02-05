import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []); // Este efecto solo se ejecutará una vez al montar el componente

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div className="banner mx-auto" variants={banner}>
        <BannerRowTop title={"s3 Studios"} />
        {/* Elimina BannerRowCenter si no lo estás utilizando */}
        {/* <BannerRowCenter title={"experience"} playMarquee={playMarquee} /> */}
        {/* <BannerRowBottom title={"Studios"} /> */}
      </motion.div>
    </div>
  );
};

const AnimatedLetters = ({ title, disabled, textSize, fontWeight }) => (
  <motion.span
    className={`row-title ${textSize} ${fontWeight}`}
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        className="row-letter"
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className="banner-row">
      <div className="row-col text-center md:text-left">
        <AnimatedLetters title={title} textSize="text-4xl md:text-6xl" fontWeight="font-bold" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="row-col text-center md:text-left mt-4 md:mt-0"
      >
        <span className="row-message text-base md:text-xl font-semibold">
          Especialistas en la creación de films únicos
        </span>
      </motion.div>
    </div>
  );
};

export default Banner;
