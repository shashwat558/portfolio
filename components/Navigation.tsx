"use client"

import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"
import { useVisible } from "@/context/VisibleContext"
import { motion } from "framer-motion"

export default function Navigation() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const { visible, setVisible } = useVisible()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch("/api/visitors")
        const data = await res.json()
        setVisitorCount(data.count)
      } catch (error) {
        console.error("Failed to fetch visitor count:", error)
      }
    }

    fetchVisitorCount()
    
    const interval = setInterval(fetchVisitorCount, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold">shashwat.</div>
   
        <div className="flex items-center gap-3">
          {visitorCount !== null && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground p-1 px-2 rounded-full bg-muted">
              <div className="animate-pulse w-2 h-2 rounded-full bg-green-500"></div>
              {visitorCount} visiting
            </div>
          )}


          <button
            type="button"
            role="switch"
            aria-checked={visible}
            onClick={() => setVisible(!visible)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors duration-200 focus:outline-none ${
              visible ? "bg-foreground/80" : "bg-muted"
            }`}
            title="Show visiters"
          >
            <span
              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-background shadow transition duration-200 ${
                visible ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
          
          <ThemeToggle />

          
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-muted-foreground transition">
              about
            </a>
            <a href="#experience" className="hover:text-muted-foreground transition">
              experience
            </a>
            <a href="#projects" className="hover:text-muted-foreground transition">
              projects
            </a>
            <a href="#open-source" className="hover:text-muted-foreground transition">
              open source
            </a>
            <a href="#contact" className="hover:text-muted-foreground transition">
              contact
            </a>
          </div>

          
          <button
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-md border border-border hover:bg-muted transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="block w-4 h-0.5 bg-foreground mb-1" />
            <span className="block w-4 h-0.5 bg-foreground mb-1" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>

      
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} exit={{ opacity: 0, y: -10 }} className="md:hidden px-6 pb-4 z-50 fixed top-20 left-0 w-full h-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3 text-sm border border-border rounded-lg p-3 bg-background">
            <a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-muted-foreground transition">
              about
            </a>
            <a href="#experience" onClick={() => setMobileOpen(false)} className="hover:text-muted-foreground transition">
              experience
            </a>
            <a href="#projects" onClick={() => setMobileOpen(false)} className="hover:text-muted-foreground transition">
              projects
            </a>
            <a href="#open-source" onClick={() => setMobileOpen(false)} className="hover:text-muted-foreground transition">
              open source
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-muted-foreground transition">
              contact
            </a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  )
}
