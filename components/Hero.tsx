"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

import { Button } from './ui/button';
import { Briefcase } from 'lucide-react';
import { toast } from '@/lib/toast';

const Hero = () => {
  return (
    <motion.div className='w-full flex justify-center items-center mt-10'>
      <motion.div
        className="relative group w-full md:w-4/5 lg:w-2/3 xl:w-1/2 
                   flex flex-col lg:flex-row justify-center items-center 
                   gap-8 lg:gap-12 p-4 sm:p-8 md:p-10"
      >
        <motion.div 
          initial= {{opacity:0, scale:0}}
          animate= {{opacity:1, scale:1}}
          whileHover={{ rotateX: 25, rotateY: -10 }} 
          transition={{ duration: 0.4 }}
          style={{ translateZ: 100 }}
        >
          <Image 
            src={"/image.png"} 
            alt='Shashwat Jain' 
            width={200} 
            height={100} 
            className='rounded-lg object-cover min-h-48 min-w-48' 
          />
        </motion.div>

        <motion.div 
          className="flex flex-col gap-6 p-6 md:p-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2">
            Hi, I'm Shashwat Jain{" "}
            <motion.span
              className="inline-block origin-bottom text-yellow-100"
              animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              👋🏻
            </motion.span>
          </motion.h1>

          <motion.p className="text-base md:text-lg tracking-wide leading-7 md:leading-8 text-muted-foreground">
            I'm a builder passionate about crafting thoughtful digital products. 
            Currently diving deep into 
            <span className="text-cyan-400 font-medium"> AI</span>, 
            <span className="text-blue-400 font-medium"> Web3</span>, and 
            <span className="text-purple-400 font-medium"> full-stack development</span>. 
            Focused on solving real problems with clean, scalable solutions.
          </motion.p>

          <motion.h2 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-400">
            Full-stack Developer • AI Enthusiast • Web3 Explorer
            </motion.h2>

          <motion.div className='flex items-center gap-3'>
            <motion.a href='mailto:jainshashwat528@gmail.com' type='_blank'>
              <Button className='text-highlight bg-highlight-50 px-4 rounded-lg py-2 text-md font-medium hover:bg-highlight-100 transition duration-300 ease-in-out shadow-sm hover:shadow flex items-center gap-2 text-blue-700 bg-blue-300 cursor-pointer'>
                <Briefcase />Hire Me
              </Button>
            </motion.a>

            <a 
            href="/shashwat-resume.pdf" 
            download 
            onClick={() => toast("Resume download started", "success")}
            className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all"
            >
            Resume
            </a>

          </motion.div>
        </motion.div>

        <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></span>
        <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-sm h-[2px] opacity-0 group-hover:opacity-100"></span>
      </motion.div>
    </motion.div>
  )
}

export default Hero;
