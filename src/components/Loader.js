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
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div className="banner mx-auto" variants={banner}>
        <BannerRowTop title={"s3 Studios"} />
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
          Especialistas en la creación de films unicos
        </span>
      </motion.div>
    </div>
  );
};

// const BannerRowBottom = ({ title }) => {
//   return (
//     <div className="banner-row center mt-8 md:mt-0">
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
//         className="scroll"
//       >
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             ease: "easeInOut",
//             duration: 1,
//             delay: 1.8,
//           }}
//         >
          
//         </motion.span>
        
//       </motion.div>
//       <AnimatedLetters title={title} textSize="text-4xl md:text-6xl" fontWeight="font-bold" />
//     </div>
//   );
// };

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className="marquee__inner text-center"
      >
        <AnimatedLetters title={title} disabled textSize="text-4xl md:text-6xl" fontWeight="font-bold" />
        <AnimatedLetters title={title} textSize="text-4xl md:text-6xl" fontWeight="font-bold" disabled />
        <AnimatedLetters title={title} textSize="text-4xl md:text-6xl" fontWeight="font-bold" disabled />
        <AnimatedLetters title={title} textSize="text-4xl md:text-6xl" fontWeight="font-bold" disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
