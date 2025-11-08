"use client"

import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"
import { motion } from "framer-motion"
import Link from "next/link"
import { useVisible } from "@/context/VisibleContext"
import { Eye, EyeOff } from "lucide-react"

export default function Navigation() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { visible, setVisible } = useVisible()

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

    
    let timeoutId: ReturnType<typeof setTimeout> | number | undefined
    
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      timeoutId = requestIdleCallback(fetchVisitorCount, { timeout: 2000 })
    } else {
      timeoutId = setTimeout(fetchVisitorCount, 0)
    }
    
    const interval = setInterval(fetchVisitorCount, 30000)
    return () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window && typeof timeoutId === 'number') {
        cancelIdleCallback(timeoutId)
      } else if (timeoutId) {
        clearTimeout(timeoutId)
      }
      clearInterval(interval)
    }
  }, [])

  return (
    <nav className=" border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
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
            onClick={() => setVisible(!visible)}
            className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
            aria-label={visible ? "Hide visitors" : "Show visitors"}
            title={visible ? "Hide visitors" : "Show visitors"}
          >
            {visible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>

          <ThemeToggle />

          
          <div className="hidden md:flex gap-8 text-sm items-center">
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
            <a href="#things-i-can-do" className="hover:text-muted-foreground transition">
              Things I Can Do
            </a>
            <Link prefetch   
              href="/blog" 
              className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              blogs
            </Link>
            
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
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} exit={{ opacity: 0, y: -10 }} className="md:hidden px-6 pb-4 z-50 fixed top-20 left-0 w-full h-full bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
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
            <button
              onClick={() => {
                setVisible(!visible)
                setMobileOpen(false)
              }}
              className="flex items-center gap-2 hover:text-muted-foreground transition text-left"
            >
              {visible ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  <span>Hide visitors</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>Show visitors</span>
                </>
              )}
            </button>
            <a 
              href="/blog" 
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-sm text-center mt-2"
            >
              blogs
            </a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  )
}
