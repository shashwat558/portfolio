"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const PageProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 h-[2px] w-full origin-left z-50 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 shadow-[0_0_10px_2px_rgba(255,191,0,0.6)] rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    />
  );
};

export default PageProgress;
