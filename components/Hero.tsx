"use client"

import { Fugaz_One } from "next/font/google"
import LiveAge from "@/components/LiveAge"

const font = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export default function Hero() {
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row md:items-center xl:gap-2 md:gap-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-2">
        <u className={font.className}>hi, i&apos;m shashwat.</u>
      </h1>
      
      <LiveAge />
      </div>
      <p className="text-lg mb-6">
         trying to build something cool that people will use and love.
      </p>

      <p className="text-base mb-8 leading-relaxed">
        i know
        <span className="bg-emerald-300 text-black px-1">
          Next.js, TypeScript, Node.js, PostgreSQL, Redis, and AI-powered workflows
        </span>
        
      </p>
      <p className="text-base mb-8 leading-relaxed">
        trying to learn and implement as much as possible.
      </p>


      <div className="mb-8">
        <p className="font-semibold mb-3">
          <span className="bg-emerald-300 text-black px-1">connect with me:</span>
        </p>
        <p className="text-sm">
          <a href="https://github.com/shashwat558" className="underline hover:text-muted-foreground transition">
            github
          </a>
          {" • "}
          <a href="https://www.linkedin.com/in/shashwat-jain-8b2b3127a/" className="underline hover:text-muted-foreground transition">
            linkedin
          </a>
          {" • "}
          <a href="https://twitter.com/shashwatj26" className="underline hover:text-muted-foreground transition">
            twitter
          </a>
        </p>
      </div>

      <div>
        <p className="text-sm">
          <span className="font-semibold">email:</span>{" "}
          <a href="mailto:shashwat@example.com" className="underline hover:text-muted-foreground transition">
            jainshashwat528@gmail.com
          </a>
        </p>
        <p className="text-sm">
          <span className="font-semibold">wanna chat?</span>{" "}
          <a href="https://cal.com/shashwat-jain-qyhfub/let-s-talk" className="underline hover:text-muted-foreground transition">
            let&apos;s talk
          </a>
        </p>
      </div>
    </section>
  )
}

