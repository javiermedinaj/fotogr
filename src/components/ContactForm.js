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
      className=" mx-auto px-4 py-8 bg-slate-300 "
    >
      <div className="max-w-3xl mx-auto text-center pb-40">
        <h2 className="text-3xl font-semibold mt-40 mb-6">Contacto</h2>
        <p className="text-lg mb-6">Puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
        <div className="flex flex-col space-y-4 ">
          <div className="flex items-center justify-center">
            <MdEmail className="h-6 w-6 mr-2 text-blue-500" />
            <a href="mailto:sybstudioss@gmail.com" className="text-lg ">sybstudioss@gmail.com</a>
          </div>
          <div className="flex items-center justify-center ">
            <FaInstagram className="h-6 w-6 mr-2 text-purple-500" />
            <a href="https://www.instagram.com/sybstudios/" target="_blank" rel="noopener noreferrer" className="text-lg ">@sybstudios</a>
          </div>
          <div className="flex items-center justify-center">
            <FaWhatsapp className="h-6 w-6 mr-2 text-green-500" />
            <a href="https://wa.me/59899388825/?text=Hola,%20estaría%20interesado%20en%20contratar%20sus%20servicios%20de%20fotografía
" className="text-lg">(+598) 99 38 88 25</a>
          </div>
          <div className="flex items-center justify-center">
            <FaWhatsapp className="h-6 w-6 mr-2 text-green-500" />
            <a href="https://wa.me/59899311336/?text=Hola,%20estaría%20interesado%20en%20contratar%20sus%20servicios%20de%20fotografía
" className="text-lg ">(+598) 99 311 336</a>
          </div>
        </div>
      </div>
     
    </motion.div>
    
  );
};

export default Contact;
