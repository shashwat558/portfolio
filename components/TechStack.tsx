"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiLangchain, SiOpenai, SiGithub, SiGit, SiZod, SiAxios, SiCloudflare,
  SiHuggingface, SiRedis, SiSocketdotio
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const sections = {
  Frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Zod", icon: <SiZod /> },
    { name: "Axios", icon: <SiAxios /> },
    { name: "Cloudflare Workers", icon: <SiCloudflare /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Websockets", icon: <SiSocketdotio /> },
  ],
  "AI Stack": [
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "OpenAI", icon: <SiOpenai /> },
    { name: "Pinecone", icon: <GiArtificialIntelligence /> },
    { name: "Huggingface", icon: <SiHuggingface /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
  ],
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
};

const TechTags = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className="flex items-center justify-center px-4 py-10"
    >
      <motion.div
        variants={item}
        className="w-full max-w-4xl border-2 border-[#d9cba3] rounded-2xl shadow-[6px_6px_0_#cabd9d] p-6 md:p-8 font-mono space-y-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold dark:text-[#d1b797] text-[#3a3228] border-b-2 border-[#c5a96e] inline-block mb-2">
          My Tech Stack
        </h2>

        {Object.entries(sections).map(([section, techs]) => (
          <motion.div key={section} variants={item}>
            <h3 className="text-lg md:text-xl font-semibold dark:text-[#e6d9c9] text-[#4a4034] mb-3">{section}</h3>
            <div className="flex flex-wrap gap-3">
              {techs.map(({ name, icon }) => (
                <motion.span
                  key={name}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px #cbb279",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 bg-[#ede1c4] text-[#3d362d] border border-[#cdbd9c] px-3 md:px-4 py-1 rounded-full text-xs md:text-sm shadow hover:shadow-md transition-all duration-200"
                >
                  <span className="text-base md:text-lg">{icon}</span>
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechTags;
