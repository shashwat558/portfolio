"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const CARDS = [
  { id: 1, src: "/banner3.png", alt: "Social Image 1" },
  { id: 2, src: "/banner.jpeg", alt: "Social Image 2" },
  { id: 3, src: "/main.jpeg", alt: "Social Image 3" },
  { id: 4, src: "/batman4.png", alt: "Social Image 4" },
  { id: 5, src: "/og-image.png", alt: "Social Image 5" },
]

// Adjusted rotations and spreads for the larger card sizes
const BASE_ROTATIONS = [-30, -15, 0, 15, 30]
const BASE_X = [-170, -85, 0, 85, 170]

export default function Socials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" })

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 w-full flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-none mb-2">
          What&apos;s Up <br />
          <span className="font-serif italic font-light tracking-wide text-5xl md:text-7xl md:ml-4">
            On Socials
          </span>
        </h2>
      </div>

      <div className="relative flex justify-center items-end w-full h-[450px] md:h-[550px] pb-10">
        {CARDS.map((card, index) => {
          const rot = BASE_ROTATIONS[index]
          const tx = BASE_X[index]

          let hoverXOffset = 0
          if (hoveredIndex !== null && hoveredIndex !== index) {
            const diff = index - hoveredIndex
            hoverXOffset = diff < 0 ? -30 : diff > 0 ? 30 : 0
          }

          return (
            <motion.div
              key={card.id}
              className="absolute w-[220px] md:w-[280px] h-[340px] md:h-[420px] rounded-[24px] overflow-hidden cursor-pointer bg-muted border border-border"
              style={{
                transformOrigin: "bottom center",
                zIndex: hoveredIndex === index ? 30 : CARDS.length - Math.abs(index - 2),
                boxShadow: hoveredIndex === index
                  ? "0 30px 60px rgba(0,0,0,0.5)"
                  : "0 10px 30px rgba(0,0,0,0.2)",
              }}
              // Reactively animate based on inView and hover
              // When NOT in view, they are all stacked perfectly at x:0, y:50, rotate: 0
              animate={{
                x: isInView ? tx + hoverXOffset : 0,
                y: isInView ? (hoveredIndex === index ? -40 : 0) : 50,
                rotate: isInView ? (hoveredIndex === index ? rot * 0.9 : rot) : 0,
                scale: isInView ? (hoveredIndex === index ? 1.05 : 1) : 0.95,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 24,
                mass: 1,
                // Key to spreading from the middle: 
                // Delay the animation based on distance from the center card!
                delay: isInView && hoveredIndex === null ? Math.abs(index - 2) * 0.14 : 0,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                priority={index === 2}
                className="object-cover pointer-events-none select-none transition-transform duration-500 ease-out"
                style={{
                  transform: hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                }}
              />
              <div
                className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                  opacity: hoveredIndex === index ? 0 : 1,
                }}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
