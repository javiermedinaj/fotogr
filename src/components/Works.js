import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Works() {
  const textAnimation = useAnimation();
  const imagesAnimation = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      await textAnimation.start({
        opacity: 1,
        transition: { duration: 1.3, delay: 0.3 },
      });
    };

    const animateImages = async () => {
      await imagesAnimation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 2, delay: 0.5 },
      });
    };

    animateText();
    animateImages();
  }, [textAnimation, imagesAnimation]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden mt-4">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={textAnimation}
      >
        Bienvenidos
      </motion.h1>

      <div className="flex flex-col md:flex-row mt-8 md:space-x-8">
        <div className="flex-1">
          <motion.img
            src="/2.jpg"
            alt="Primera Foto"
            className="mx-auto mb-4 w-full h-auto"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={imagesAnimation}
          />
        </div>
        <motion.div
          className="text-center mx-auto p-2"
          initial={{ opacity: 0 }}
          animate={textAnimation}
        >
           Contenido del texto 
        </motion.div>
        <div className="flex-1">
          <motion.img
            src="/4.jpg"
            alt="Tercera Foto"
            className="mx-auto mb-4 w-full h-auto"
            initial={{ x: "100vw", opacity: 0 }}
            animate={imagesAnimation}
          />
        </div>
      </div>

      <div className="text-center mt-8 mx-auto">
        <motion.h2
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
        >
          Sobre nosotros
        </motion.h2>
        <p>Somos Maxi Segredo y Felipe Benoit. Hace años que trabajamos en la fotografía y video y nos apasiona cada vez que lo hacemos. Somos un equipo conformado por jóvenes con muchas ganas, ambición y entrega pero con una actitud muy responsable y comprometida frente a este acontecimiento tan importante, que quedará guardado para el resto de sus vidas. Antes que nada, de parte de todo el equipo, queremos felicitarlos por este paso que dan como pareja. Por eso queremos desearles lo mejor para esta nueva etapa. Para nosotros va a ser más que un placer acompañarlos y estar al lado de ustedes en uno de los días más importantes de sus vidas!</p>
      </div>
    </div>
  );
}

export default Works;
