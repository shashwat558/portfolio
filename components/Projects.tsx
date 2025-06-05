"use client"
import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from "framer-motion";


import RetroProjectCard from './ui/projectCard/projectCard'

const ProjectsArray = [
  {"projectName": "Buildtogether",
    "description": "A platform where students can showcase there project and find amazing projects that their peers are building and collaborate with them.",
    "techUsed": ["Nextjs", "Websockets", "redis", "prisma"],
    "liveLink": "https://buildtogether.vercel.app",
    "githubLink": "https://github.com/shashwat558/buildtogether",
    "ProjectImage": "/buildtogether.png",
    "projectLogo": "/buildtogetherLogo.png"
  },
  {
    "projectName": "Proddy",
    "description": "A web app that gives AI-summarized reviews of Myntra products and lets users chat with the product instead of scrolling through endless reviews.",
    "techUsed": ["Nextjs", "Gemini", "puppeteerjs", "Langchain", "openai"],
    "liveLink": "https://knowyourproduct.vercel.app",
    "githubLink": "https://github.com/shashwat558/knowyourproduct",
    "ProjectImage": "/proddy.png",
    

  },
  {
    "projectName": "LaunchHawk",
    "description": "A saas that will help indie hackers to plan their product launch",
    "techUsed": ["Nextjs", "openai", "puppeteerjs", "Langchain", "openai"],
    "liveLink": "/",
    "githubLink": "https://github.com/shashwat558/launchhawk",
  "ProjectImage": "/LaunchHawk.png",
    

  },
  {
    "projectName": "Full-stack website for a fashion brand",
    "description": "A full stack beautiful website for a brand",
    "techUsed": ["Reactjs", "firebase"],
    "liveLink": "https://khbspoke.vercel.app/",
    "githubLink": "https://github.com/shashwat558/khbspoke",
    "ProjectImage": "/khbespoke.png",
    
    

  },
  {
    "projectName":"Chatterly",
    "description": "A realtime chat-app using redis as a database",
    "techUsed": ["nextjs", "redis"],
    "liveLink": "",
    "githubLink": "https://github.com/shashwat558/chatterly",
    "ProjectImage": "",
    
        

  },
  { "projectName":"what-i-think",
    "description": "My personal blog site",
    "techUsed": ["nextjs", "cloudfalre workers", "honojs"],
    "liveLink": "https://what-i-think.vercel.app",
    "githubLink": "https://github.com/shashwat558/what-i-think",
    "ProjectImage": "/whatIThink.png",
  },
  {
    "projectName": "Pokehub",
    "description": "A pokemon card generator based on your github profile",
    "techUsed": ["nextjs", "gemini api", "tailwind"],
    "liveLink": "https://pokehub-fun.vercel.app",
    "githubLink": "https://github.com/shashwat558/pokex",
    "ProjectImage": "/pokehub.png"

  }, 
  {
    "projectName": "BrightGrid landing page",
    "description": "A professional landing page for brightgrid",
    "techUsed": ["nextjs", "framer", "tailwind"],
    "liveLink": "https://brightgrid.vercel.app/",
    "githubLink": "https://github.com/shashwat558/Brightgrid",
    "ProjectImage": "/bright.png"

  },
  {
    "projectName": "RejectionGPT(Currently building)",
    "description": "find what and what can get you rejected based on your resume and job description.",
    "techUsed": ["nextjs", "langchain","openai","supabase", "tailwind"],
    "liveLink": "/",
    "githubLink": "https://github.com/shashwat558/rejectionGPT",
    "ProjectImage": "/rejection.png"

  },
  {
    "projectName": "Lejob AI",
    "description": "Lejob will find you the job roles based on your resume with the help of rag capabilities",
    "techUsed": ["nextjs", "gemini", "langchain", "supabase"],
    "liveLink": "https://getjobai-three.vercel.app",
    "githubLink": "https://github.com/shashwat558/getjobai",
    "ProjectImage": "/lejob.png",

  }


    
       

]





const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -200,
    skew: -15,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    skew: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};


const Projects = () => {
   const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <motion.div
      className="w-full xl:ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
       ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {ProjectsArray.map((project, index) => (
        <motion.div  key={index}  variants={cardVariants}>
          <RetroProjectCard
            projectName={project.projectName}
            description={project.description}
            techUsed={project.techUsed}
            projectImage={project.ProjectImage}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;




