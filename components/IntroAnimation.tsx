import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chaosPhrases = [
  "Assembling..",
  "Deploying in 3...",
  "2...",
  "1... 💥",
];

export default function IntroAnimation() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    if (currentPhrase < chaosPhrases.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPhrase((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentPhrase]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#a89b86] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#a78bfa] to-[#67e8f9] blur-[200px] opacity-20"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />

      <AnimatePresence mode="wait">
        <motion.h1
          key={chaosPhrases[currentPhrase]}
          className="text-4xl md:text-6xl text-white font-mono font-bold z-10"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {chaosPhrases[currentPhrase]}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}
