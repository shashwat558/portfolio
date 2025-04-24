"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";



import { Briefcase } from 'lucide-react';
import { toast } from '@/lib/toast';
import { Playfair_Display } from 'next/font/google';

const playFair = Playfair_Display({
  weight: "400",
  subsets: ["latin"]
})

const sentence = "Hey there! I’m Shashwat — a builder who loves creating things that make a difference.";


const container = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TextMagic = ({ text }: { text: string }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.p
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={`${playFair.className} text-[40px] leading-14 font-semibold flex flex-wrap  text-black dark:text-white`}
      style={{ wordSpacing: "0.2rem" }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={child}
         
          style={{ display: "inline-block", marginRight: "0.25rem" }}
        >
          {word + "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
};


const AnimatedText = () => {
    return (
        <motion.p 
            className="text-[26px] tracking-wide leading-7 md:leading-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            Currently geeking out over
            <motion.span 
                className="text-gray-900 dark:text-gray-300 font-medium"
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
            >
                {" "}AI
            </motion.span>, 
            <motion.span 
                className="text-gray-900 font-medium dark:text-gray-300"
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
            >
                {" "}Web3
            </motion.span>, and
            <motion.span 
                className="text-gray-900 font-medium dark:text-gray-300"
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
            >
               {" "} full-stack development {" "}
            </motion.span> 
            projects — love making things that work well and scale easily.
        </motion.p>
    );
};








const Hero = () => {


  return (
    <motion.div className='w-full flex justify-center items-center'>
      <motion.div className='relative w-full md:w-4/5 lg:w-2/3 xl:w-1/2 
          flex flex-col lg:flex-row justify-center items-center 
                   gap-8 lg:gap-12 p-4 sm:p-8 md:p-10'>

                    <motion.div className='flex flex-col gap-10'>
                      <TextMagic text={sentence}/>

                       <AnimatedText />
                       <motion.h2
                        className="text-xl md:text-xl text-gray-700 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        
                       
                        whileTap={{ scale: 0.95 }}
                    >
                        Full-stack Developer • AI Enthusiast • Web3 Explorer
                    </motion.h2>

                                    <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <motion.a 
                  href='mailto:jainshashwat528@gmail.com' 
                  target='_blank' 
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.button
                    className="text-highlight bg-highlight-50 px-4 rounded-lg py-2 text-md font-medium hover:bg-highlight-100 transition duration-300 ease-in-out shadow-sm hover:shadow flex items-center gap-2 text-blue-700 bg-blue-300 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.3)",
                      textShadow: "0px 0px 8px rgba(59,130,246,0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Briefcase /> Hire Me
                  </motion.button>
                </motion.a>

                <motion.a 
                  href="/shashwat-resume.pdf" 
                  download 
                  onClick={() => toast("Resume download started", "success")}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <motion.button
                    className="border dark:border-white border-black px-4 py-2 rounded-md hover:bg-black dark:text-white hover:text-white transition-all"
                    whileHover={{
                      backgroundColor: "#000",
                      color: "#fff",
                      boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    Resume
                  </motion.button>
                </motion.a>
              </motion.div>

          </motion.div>
                              

            </motion.div>

              </motion.div>
  )
}

export default Hero;
