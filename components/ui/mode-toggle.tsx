"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <motion.div className="flex gap-2 items-center rounded-2xl border-[1.3px] p-2">
      <button onClick={() => setTheme("light")}>
        <SunIcon
          className={`w-3 h-3 transition-all cursor-pointer ${
            resolvedTheme === "light" ? "text-yellow-500 scale-110" : "text-gray-500"
          }`}
        />
      </button>
      <button onClick={() => setTheme("dark")}>
        <MoonIcon
          className={`w-3 h-3 transition-all cursor-pointer ${
            resolvedTheme === "dark" ? "text-purple-500 scale-110" : "text-gray-500"
          }`}
        />
      </button>
    </motion.div>
  )
}
