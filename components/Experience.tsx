"use client";
import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard from './ui/experienceCard';

const ExperinecArray = [
  {
    "CompanyName": "Drema AI",
    "role": "Web developer",
    "description": "Contributed to multiple client projects, building responsive and scalable web applications using Next.js and React. Ensured clean, maintainable code and smooth user experiences.",
    "logo": "/logo.png",
    "timeline": "April 2025 - now"
  }
];

const Experience = () => {
  return (
    <motion.div className="w-full flex flex-col items-center mt-5 gap-8">
      
   
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-bold tracking-tight text-center border-b-1 border-b-gray-300 "
      >
        Experience
      </motion.h2>

      
      <motion.div className="relative group w-full md:w-4/5 lg:w-2/3 xl:w-1/2 
        flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 p-4 sm:p-8 md:p-10">

        {ExperinecArray.map((item, index) => (
          <ExperienceCard
            key={index}
            companyName={item.CompanyName}
            description={item.description}
            companyLogo={item.logo}
            role={item.role}
            timeline={item.timeline}
          />
        ))}

       
        <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></span>
        <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-sm h-[2px] opacity-0 group-hover:opacity-100"></span>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
