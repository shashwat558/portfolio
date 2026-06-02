"use client"

import dynamic from "next/dynamic"
import Image from "next/image"

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
      live: "https://rejectiongpt.sshwt.me",
      source: "https://github.com/shashwat558/RejectionGPT",
    },
    {
      name: "Chatterly",
      description: "A real-time chat app with end-to-end encryption, video calling, and high-performance messaging using Redis.",
      tech: ["Next.js", "Redis"],
      live: "https://chatterly.sshwt.me",
      source: "Source Code",
    },
    {
      name: "Background job queue worker system",
      description: "A robust background job processing system built with FastAPI and Redis for handling asynchronous tasks and distributed work queues.",
      tech: ["FastAPI", "PostgreSQL", "Redis", "Python"],
      live: "Source Code",
      source: "https://github.com/shashwat558/background-job-queue",
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
      name: "builderOS",
      description: "An all-in-one directory for students and builders to find opportunities, grants, benefits, hackathons, resources, and tools.",
      tech: ["Next.js", "TailwindCSS", "Supabase"],
      live: "https://builder-os.vercel.app",
      source: "Source Code",
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
      name: "Buildtogether",
      description:
        "A platform where students can showcase their projects, discover what their peers are building, and collaborate with them.",
      tech: ["Next.js", "WebSockets", "Redis", "Prisma"],
      live: "https://buildtogether.vercel.app",
      source: "https://github.com/shashwat558/buildtogether",
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
      <main className="max-w-4xl mx-auto px-6 py-16 border-l-1 border-r-1">
        <div className="w-full h-32 md:h-48 lg:h-64 relative mb-8 rounded-lg overflow-hidden">
          <Image
            src="/banner3.png"
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
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
