"use client";
import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard from './ui/experienceCard';

const ExperinecArray = [
  {
    CompanyName: "Drema AI",
    role: "Web developer",
    description: "Contributed to multiple client projects, building responsive and scalable web applications using Next.js and React. Ensured clean, maintainable code and smooth user experiences.",
    logo: "/logo.png",
    timeline: "April 2025 - now"
  }, 
  
];



const Experience = () => {
  return (
    <motion.div className="w-full min-h-[100px] flex flex-col items-center mt-10 gap-10 bg-[#0d0d0d] text-green-300 p-6 rounded-xl border-2 border-pink-500 ">
      
      <motion.div
        className="relative group w-[100%] h-full flex flex-col gap-8 px-4 py-6 bg-[#111] border border-cyan-400 rounded-lg shadow-[0_0_8px_#0ff]">

        <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-70 group-hover:blur-sm overflow-x-scroll"></span>

        
        <div className="flex flex-col gap-2 w-full h-full overflow-x-scroll">
          {ExperinecArray.map((item, index) => (
            <ExperienceCard
              key={index}
              companyName={item.CompanyName ?? ""}
              description={item.description ?? ""}
              companyLogo={item.logo ?? ""}
              role={item.role ?? ""}
              timeline={item.timeline ?? ""}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
