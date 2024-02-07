import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    src: "/2.jpg",
    color: "#000000"
  },
  {
    src: "/4.jpg",
    color: "#8C8C8C"
  },
  {
    src: "/foto1.jpg",
    color: "#EFE8D3"
  },
  {
    src: "/7.jpg",
    color: "#EFE8D3"
  },
  {
    src: "/8.jpg",
    color: "#EFE8D3"
  },
  {
    src: "/9.jpg",
    color: "#EFE8D3"
  }
];

const imageVariants = {
  hover: { scale: 1.05 },
};

export default function Home() {
  return (
    <main>
      <div className="flex items-center flex-col pt-10 pb-10 dark:bg-zinc-950 dark:text-white">
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <motion.div
              className="flex items-center justify-center p-5 border-t border-solid border-gray-300 cursor-pointer transition-all w-full md:w-1/2 lg:w-1/3"
              key={`project_${index}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '20px', // Agregado para espacio entre proyectos
              }}
              whileHover="hover"
            >
              <motion.img
               whileHover={{ scale: 1.1 }}
                src={project.src}
                alt={`Project ${index + 1}`}
                width={200}
                height={200} // Establece el alto deseado
                variants={imageVariants}
                initial="rest"
                animate="rest"
                className="transition-transform"
              />
            </motion.div>
          ))}
        </div>
        <div className='flex items-center justify-center p-6 mb-2'>
          <Link to="/works" className='px-3 py-3 rounded bg-green-200 dark:text-black'>
            <p>More works</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
