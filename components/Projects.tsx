"use client"
import React from 'react'
import ProjectCard from './ui/projectCard'
import {motion} from "framer-motion"

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
    "ProjectImage": "",
    

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
    "liveLink": "https://chatterlyforu.vercel.app",
    "githubLink": "https://github.com/shashwat558/chatterly",
    "ProjectImage": "/khbespoke.png",
    
        

  },
  { "projectName":"what-i-think",
    "description": "My personal blog site",
    "techUsed": ["nextjs", "cloudfalre workers", "honojs"],
    "liveLink": "https://what-i-think.vercel.app",
    "githubLink": "https://github.com/shashwat558/what-i-think",
    "ProjectImage": "/whatIThink.png",}
    
       

]



const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
       <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-bold tracking-tight text-center border-b-1 border-b-gray-300 w-1/2"
      >
        <motion.h1 className='text-left  '>Projects</motion.h1>
        
      </motion.div>
      <div className="w-full lg:w-1/2 overflow-x-auto">
     
        <motion.div  className="flex gap-6 px-4 py-2 w-max mt-5 max-sm:flex-col">
          {ProjectsArray.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              projectImage={project.ProjectImage}
              description={project.description}
              techUsed={project.techUsed}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
