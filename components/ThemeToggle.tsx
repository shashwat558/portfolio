"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
        aria-label="Toggle theme"
      >
        <div className="w-4 h-4" />
      </button>
    )
  }

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleClick = () => {
    if (!document.startViewTransition) {
      switchTheme()
      return
    }
    document.startViewTransition(switchTheme)
  }

  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  )
}

