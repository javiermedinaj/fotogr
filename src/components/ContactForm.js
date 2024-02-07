import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 dark:bg-zinc-950 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p className="text-lg mb-6">Puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
        <div className="flex flex-col space-y-4 ">
          <div className="flex items-center justify-center">
            <MdEmail className="h-6 w-6 mr-2 text-blue-500" />
            <a href="mailto:sybstudioss@gmail.com" className="text-lg ">sybstudioss@gmail.com</a>
          </div>
          <div className="flex items-center justify-center">
            <FaInstagram className="h-6 w-6 mr-2 text-purple-500" />
            <a href="https://www.instagram.com/sybstudios/" target="_blank" rel="noopener noreferrer" className="text-lg ">@sybstudios</a>
          </div>
          <div className="flex items-center justify-center">
            <FaWhatsapp className="h-6 w-6 mr-2 text-green-500" />
            <a href="tel:+59899388825" className="text-lg">(+598) 99 38 88 25</a>
          </div>
          <div className="flex items-center justify-center">
            <FaWhatsapp className="h-6 w-6 mr-2 text-green-500" />
            <a href="tel:+59899311336" className="text-lg ">(+598) 99 311 336</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
