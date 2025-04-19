"use client"
import React from 'react'


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
   <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {ProjectsArray.map((project, index) => (
    <div key={index} className="aspect-[4/3]"> {/* Adjust as needed */}
      <RetroProjectCard
        projectName={project.projectName}
        description={project.description}
        techUsed={project.techUsed}
        projectImage={project.ProjectImage}
        liveLink={project.liveLink}
        githubLink={project.githubLink}
      />
    </div>
  ))}
</div>


  );
};

export default Projects;
