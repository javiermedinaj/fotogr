import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Segredo", "&", "Benoit", "Studios"];

export default function Loader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
        return () => clearTimeout(timeout);
    }, [index]);

    const opacity = {
        initial: { opacity: 0 },
        enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
    };

    const slideUp = {
        initial: { top: 0 },
        exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } },
    };

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: { d: initialPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
        exit: { d: targetPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 } },
    };

    return (
        <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="introduction fixed z-50 flex items-center justify-center h-screen w-screen bg-gray-900"
    >
        {dimension.width > 0 && (
            <>
                <motion.p
                    variants={opacity}
                    initial="initial"
                    animate="enter"
                    className="relative z-10 flex items-center text-white text-6xl"
                >
                    <span className="block w-5 h-5 bg-white rounded-full mr-2"></span>
                    {words[index]}
                </motion.p>
                <svg className="absolute top-0 w-full h-full">
                    <motion.path
                        variants={curve}
                        initial="initial"
                        exit="exit"
                        className="fill-current text-gray-900"
                    ></motion.path>
                </svg>
            </>
        )}
    </motion.div>
    );
}
