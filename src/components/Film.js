import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fotos from "../data/Fotos.json";

const imageVariants = {
  hover: { scale: 1.05 },
};

export default function Home() {
  const firstThreeFotos = fotos.fotos.slice(0, 6);

  return (
    <main>
      <div className="flex justify-center pt-10 pb-10 bg-slate-300 ">
        <h1 className="text-5xl text-center">Some of our works</h1>
      </div>
      <div className="flex items-center flex-col pt-10 pb-10 bg-slate-300  ">
        <div className="flex flex-wrap justify-center">
          {firstThreeFotos.map((foto, index) => (
            <motion.div
              className="flex items-center justify-center p-5 border-t border-solid border-slate-200 cursor-pointer transition-all w-full md:w-1/2 lg:w-1/3"
              key={`foto_${index}`}
              style={{
                position: "relative",
                overflow: "hidden",
                marginBottom: "20px",
              }}
              whileHover="hover"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={foto.enlace}
                alt={foto.nombre}
                width={300}
                height={300}
                variants={imageVariants}
                initial="rest"
                animate="rest"
                className="transition-transform"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center p-6 mb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
            <Link to="/works">More works</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
