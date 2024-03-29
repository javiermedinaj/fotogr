import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Works() {
  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
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

  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className="lg:pl-20 lg:pr-20 pt-20 flex justify- pb-20 p-8 bg-slate-300  ">
      <div className="max-w-7xl flex gap-10 relative ">
        <p className="m-0 text-2xl lg:text-4xl leading-7">
          {phrase.split(" ").map((word, index) => (
            <span key={index} className="relative inline-flex">
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                className="mr-3"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="text-base lg:text-lg w-4/5 font-light"
        >
          The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
        </motion.p>
        
      </div>
    </div>
  );
}
