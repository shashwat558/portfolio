"use client"

import { useEffect, useRef, useState } from "react"

export default function LiveAge() {
  
  const birth = useRef(new Date(2004, 8, 26, 0, 0, 0, 0).getTime())
  const [now, setNow] = useState<number>(Date.now())

  useEffect(() => {
    let raf = 0
    const tick = () => {
      setNow(Date.now())
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const diffMs = Math.max(0, now - birth.current)
  const msPerYear = 365.2425 * 24 * 60 * 60 * 1000 
  const years = diffMs / msPerYear

  return (
    <span className="font-medium opacity-50">been here for <span className="font-semibold text-foreground">{years.toFixed(9)}</span> years</span>
  )
}
