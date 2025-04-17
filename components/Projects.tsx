"use client"
import React from 'react'
import ProjectCard from './ui/projectCard'
import {motion} from "framer-motion"
import Link from 'next/link'

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
    <div className="w-full flex flex-col justify-center items-center mt-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-bold tracking-tight text-center border-b border-b-gray-300 w-1/2"
      >
        <motion.h1 className="text-left">Projects</motion.h1>
      </motion.div>

      <div className="w-full lg:w-1/2 overflow-x-hidden relative mt-5">
        
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-t from-white dark:from-black to-transparent z-10" />

        <motion.div className="flex max-sm:block  gap-6 px-4 py-2 w-max  max-sm:h-[382px] overflow-hidden">
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

        <Link href="/projects">
          <motion.button initial={{opacity:0, scale:0}} animate={{opacity: 1, scale:1}} transition={{duration: 0.3}} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 border-[1.2px] rounded-full p-3 text-sm text-gray-100 bg-gradient-to-r from-gray-900 to-gray-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:scale-95 transition-all ease-in-out duration-300 cursor-pointer z-20">
            More projects
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Projects;