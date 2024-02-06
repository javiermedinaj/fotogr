import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Example 1",
    src: "/2.jpg",
    color: "#000000"
  },
  {
    title: "Example 2",
    src: "/4.jpg",
    color: "#8C8C8C"
  },
  {
    title: "Example 3",
    src: "/foto1.jpg",
    color: "#EFE8D3"
  },

];

const imageVariants = {
  hover: { scale: 1.05 },
};

export default function Home() {
  return (
    <main>
      <div className="flex items-center flex-col pt-10 pb-10 dark:bg-zinc-950 dark:text-white">
        {projects.map((project, index) => (
          <motion.div
            className="flex items-center justify-between p-5 border-t border-solid border-gray-300 cursor-pointer transition-all"
            key={`project_${index}`}
            style={{
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '20px', // Agregado para espacio entre proyectos
            }}
            whileHover="hover"
          >
            <div className="flex flex-col pl-2">
              <h2 className="text-2xl p-1 font-semibold mb-0 transition-all">{project.title}</h2>
              <p className="font-light mb-0 p-2 transition-all">Design & Development</p>
            </div>
            
            <motion.img
             whileHover={{ scale: 1.1 }}
              src={project.src}
              alt={project.title}
              width={200}
              height={200} // Establece el alto deseado
              variants={imageVariants}
              initial="rest"
              animate="rest"
              className="transition-transform"
              
            />
          </motion.div>
        ))}
      <div className='flex items-center justify-center p-6 mb-2'>
        <Link to="/works" className='px-3 py-3 rounded bg-green-200 dark:text-black'>
          <p>More works</p>
        </Link>
      </div>
      </div>
    </main>
  );
}
