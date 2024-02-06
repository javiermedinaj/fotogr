import React from 'react'
import { motion } from 'framer-motion';

const works = [
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
  
    {
      title: "Example 5",
      src: "/5.jpg",
      color: "#FF0000"
    },
    {
      title: "Example 6",
      src: "/6.jpg",
      color: "#00FF00"
    },
    {
      title: "Example 7",
      src: "/7.jpg",
      color: "#0000FF"
    },
    {
      title: "Example 8",
      src: "/8.jpg",
      color: "#FFFF00"
    },
    {
      title: "Example 9",
      src: "/9.jpg",
      color: "#00FFFF"
    },
    {
      title: "Example 10",
      src: "/10.jpg",
      color: "#FF00FF"
    },
    {
      title: "Example 11",
      src: "/11.jpg",
      color: "#C0C0C0"
    },
    {
      title: "Example 12",
      src: "/12.jpg",
      color: "#808080"
    },
    {
      title: "Example 13",
      src: "/13.jpg",
      color: "#800000"
    },
    {
      title: "Example 14",
      src: "/14.jpg",
      color: "#008000"
    },
    {
      title: "Example 15",
      src: "/15.jpg",
      color: "#000080"
    },
    {
      title: "Example 16",
      src: "/16.jpg",
      color: "#808000"

    },
    {
      title: "Example 17",
      src: "/17.jpg",
      color: "#800080"
    },
    {
      title: "Example 18",
      src: "/18.jpg",
      color: "#008080"
    },
    {
      title: "Example 19",
      src: "/19.jpg",
      color: "#C0C0C0"
    },

  ];

  

const imageVariants = {
    hover: { scale: 1.05 },
  };
  const WorkPage = () => {
    return (
      <main>
        <div className="flex flex-wrap justify-center pt-10 pb-10 dark:bg-zinc-950 dark:text-white">
          {works.map((project, index) => (
            <motion.div
              className="flex flex-col items-center p-5 border-t border-solid border-gray-300 cursor-pointer transition-all w-80 mx-4 mb-8"
              key={`project_${index}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover="hover"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.src}
                alt={project.title}
                width={300}
                height={300}
                variants={imageVariants}
                initial="rest"
                animate="rest"
                className="transition-transform mb-4"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-2xl p-1 font-semibold mb-0 transition-all">{project.title}</h2>
                <p className="font-light mb-0 p-2 transition-all">Design & Development</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    );
  }
  
  export default WorkPage
  