import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="flo-footer flo-footer--518 disable-appear flex flex-col items-center mt-6 p-4">
      <div className="flo-footer-instagram-area text-center mb-2">
        <motion.div
          className="flo-footer-instagram-area__text-area flo-footer-instagram-area__text-area--title-over mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="flo-footer-instagram-area__pretitle" data-font="third_level/overline_2">
            FOLLOW US ON INSTAGRAM
          </span>
          <a
            className="flo-footer-instagram-area__title"
            rel="noreferrer"
            href="https://www.instagram.com/sybstudios?igsh=N2E3Z204dmlvbjZp"
            target="_blank"
            data-font="title_3/xsmall"
          >
            @sybstudios
          </a>
        </motion.div>

        <motion.div
          className="flo-footer-instagram-area__images grid grid-cols-3 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
      
          <motion.img
        //    initial={{
        //     x: -100,
        //     opacity: 0,
        // }}
        // transition={{
        //     duration: 1.2,
        // }}
        // whileInView={{
        //     opacity: 1, x: 0,
        // }}
        viewport={{ once: true }}
            className="flo-footer-instagram-area__image loaded mx-auto my-auto"
            width="640"
            height="320"
            alt=""
            src="/2.jpg"
            style={{ opacity: 1, filter: 'blur(0px)' }}
            
          />
          
          <motion.img
        //    initial={{
        //     x: -100,
        //     opacity: 0,
        // }}
        // transition={{
        //     duration: 1.2,
        // }}
        // whileInView={{
        //     opacity: 1, x: 0,
        // }}
        viewport={{ once: true }}
            className="flo-footer-instagram-area__image loaded mx-auto my-auto"
            width="640"
            height="320"
            alt=""
            src="/5.jpg"
            style={{ opacity: 1, filter: 'blur(0px)' }}
          />
          <motion.img
        //    initial={{
        //     x: 200,
        //     opacity: 0,
        // }}
        // transition={{
        //     duration: 1.2,
        // }}
        // whileInView={{
        //     opacity: 1, x: 0,
        // }}
        // viewport={{ once: true }}
            className="flo-footer-instagram-area__image loaded mx-auto my-auto"
            width="640"
            height="320"
            alt=""
            src="/4.jpg"
            style={{ opacity: 1, filter: 'blur(0px)' }}
          />
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button className='mt-8 mb-8 flex items-center'>
          Back to top
        </button>
      </motion.div>

     
    </footer>
  );
};

export default Footer;
