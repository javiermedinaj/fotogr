import React, { useRef, useLayoutEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const direction = useRef(-1); 

  const animate = useCallback(() => { 
    let xPercent = 0; 
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
 
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction.current; 
  }, []); 

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction.current = e.direction * -1), 
        },
        x: '-500px',
      });

      requestAnimationFrame(animate);
    }
  }, [animate]); 

  const slideUp = {
    initial: {
      y: 0,
    },
    enter: {
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
    },
  };

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className="relative flex h-screen overflow-hidden">
      <video src="/video1.mp4" autoPlay loop muted playsInline className="object-cover w-full h-full" alt="background" />
      <div className="absolute bottom-20 left-0">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className="relative m-0 text-white text-4xl lg:text-6xl font-semibold pr-10">
            Freelance
          </p>
          <p ref={secondText} className="absolute left-full top-0 relative m-0 text-white text-4xl lg:text-6xl font-semibold pr-10">
            Photographer
          </p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className="absolute top-1/3 left-2/3 text-white text-base lg:text-xl font-light">
        <p>s3 Studios</p>
        <p>Segredo & Benoit Studios</p>
      </div>
    </motion.main>
  );
};

export default Hero;
