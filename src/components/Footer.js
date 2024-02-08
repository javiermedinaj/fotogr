import { useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  const container = useRef(null);

  return (
    <motion.div
      ref={container}
      className="flex flex-col items-center justify-center bg-gray-200 dark:bg-zinc-950 dark:text-white py-20 relative"
    >
      <div className="flex flex-col items-center max-w-7xl w-full mx-10">
        <div className="border-b border-gray-600 pb-10 relative text-center">
          <a
            href="mailto:sybstudioss@gmail.com"
            className="flex items-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img
                src="/logo.jpg"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          <h2 className="text-5xl font-light mt-8">Let's work together</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <span className="flex items-center mb-4 md:mb-0">
              <h3 className="mr-2">Follow us</h3>
              <a
                href="https://www.instagram.com/sybstudios"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <FaInstagram size={24} />
              </a>
            </span>
            <span className="flex items-center mb-4 md:mb-0">
              <h3 className="mr-2">Email</h3>
              <a href="sybstudioss@gmail.com" className="flex items-center">
                <CiMail size={24} />
              </a>
            </span>
            <span className="flex items-center mb-4 md:mb-0">
              <h3 className="mr-2">WhatsApp</h3>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <FaWhatsapp size={24} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
