import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { FaInstagram, FaEmail, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container.current,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="flex flex-col items-center justify-center bg-gray-900 text-white py-10 relative"
    >
      <div className="flex flex-col items-center max-w-7xl w-full mx-10">
        <div className="border-b border-gray-600 pb-10 relative text-center">
          <a href="mailto:info@dennissnellenberg.com">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img
                src="/logo.jpg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          <h2 className="text-5xl font-light mt-3">Let's work together</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row gap-8">
            <span className="flex items-center mb-4 md:mb-0">
              <h3 className="mr-2">Follow us</h3>
              <a href="https://www.instagram.com/">
                <FaInstagram size={24} />
              </a>
            </span>
            {/* Otros íconos */}
          </div>
       
          <div className="flex flex-col md:flex-row gap-8">
            <a href="mailto:info@info.com">
              {/* <FaEmail size={24} /> */}
              <p>Email: info@info.com</p>
            </a>
            <a href="tel:+31627847430">
              <FaWhatsapp size={24} />
              <p>+31 6 27 84 74 30</p>
            </a>
          </div>
       
        </div>
      </div>
    </motion.div>
  );
}
