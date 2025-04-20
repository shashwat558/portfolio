"use client"

import * as React from "react"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <motion.div className="flex gap-2 items-center">
  
  <button
    aria-label="Switch to light mode"
    onClick={() => setTheme("light")}
    className={`w-4 h-4 rounded-sm border border-amber-600 transition-all duration-200 cursor-pointer ${
      resolvedTheme === "light" ? "bg-amber-50 shadow-[0_0_6px_rgba(251,191,36,0.6)]" : "bg-white"
    }`}
  />

  
  <button
    aria-label="Switch to dark mode"
    onClick={() => setTheme("dark")}
    className={`w-4 h-4 rounded-sm border border-amber-900 transition-all duration-200 cursor-pointer ${
      resolvedTheme === "dark" ? "bg-black shadow-[0_0_6px_rgba(0,0,0,0.6)]" : "bg-gray-900/70"
    }`}
  />
</motion.div>

  )
}
