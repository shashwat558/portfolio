"use client"

import dynamic from "next/dynamic"

import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"

// Lazy load below-the-fold components
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true })
const OpenSource = dynamic(() => import("@/components/OpenSource"), { ssr: true })
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true })
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true })
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true })

const NowPlaying = dynamic(() => import("@/components/NowPlaying"), { ssr: false })
const ThingsICanDo = dynamic(() => import("@/components/ThingsICanDo"), { ssr: true })

export default function Home() {
  const projects = [
  {
    name: "RejectionGPT",
    description:
      "Find out what can get you rejected based on your resume and job description using AI insights.",
    tech: ["Next.js", "LangChain", "OpenAI", "Supabase", "TailwindCSS"],
    live: "https://rejectiongpt.shashwatt.tech",
    source: "https://github.com/shashwat558/RejectionGPT",
  },
  {
    name: "Proddy",
    description:
      "Web-scrapes Myntra product reviews and gives AI-summarized feedback to help users make quick purchase decisions.",
    tech: ["Next.js", "Gemini", "Puppeteer.js", "LangChain", "OpenAI"],
    live: "View Live",
    source: "https://github.com/shashwat558/know-your-product",
  },
  {
    name: "Lejob AI",
    description:
      "Lejob helps you find the most suitable job roles based on your resume using RAG-powered AI search.",
    tech: ["Next.js", "Gemini", "LangChain", "Supabase"],
    live: "https://getjobai-three.vercel.app/",
    source: "https://github.com/shashwat558/getjobai",
  },
  {
    name: "Pokehub",
    description:
      "A Pokémon card generator based on your GitHub profile data.",
    tech: ["Next.js", "Gemini API", "TailwindCSS"],
    live: "View Live",
    source: "Source Code",
  },
  {
    name: "Full-stack website for a fashion brand",
    description: "A full-stack, beautiful website for a fashion brand.",
    tech: ["React.js", "Firebase"],
    live: "View Live",
    source: "Source Code",
  },
  {
    name: "Buildtogether",
    description:
      "A platform where students can showcase their projects, discover what their peers are building, and collaborate with them.",
    tech: ["Next.js", "WebSockets", "Redis", "Prisma"],
    live: "https://buildtogether.vercel.app",
    source: "https://github.com/shashwat558/buildtogether",
  },
  {
    name: "Chatterly",
    description: "A real-time chat app using Redis as a database.",
    tech: ["Next.js", "Redis"],
    live: "View Live",
    source: "Source Code",
  },
  {
    name: "what-i-think",
    description: "My personal blog site built with modern web tools.",
    tech: ["Next.js", "Cloudflare Workers", "Hono.js"],
    live: "https://what-i-think.vercel.app",
    source: "https://github.com/shashwat558/what-i-think",
  },
  {
    name: "BrightGrid landing page",
    description: "A professional and modern landing page for BrightGrid.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    live: "https://brightgrid.vercel.app",
    source: "https://github.com/shashwat558/Brightgird",
  },
];

  const experience = [
    {
      period: "April 2025 - July 2025",
      company: "DremaAI",
      role: "Full Stack Developer",
      description: "Contributed to multiple client projects, building responsive and scalable web applications using Next.js and React. Ensured clean, maintainable code and smooth user experiences.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      
       <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <Hero />
        <NowPlaying />
        <Experience experience={experience} />
        <OpenSource />
        <Projects projects={projects} />
        <Skills />
        <ThingsICanDo />
        <Contact />
      </main>


      
      
    </div>
  )
}
