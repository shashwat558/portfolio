"use client"

import { useEffect } from "react"

export default function PreloadBatman() {
  useEffect(() => {
    
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = "/batman4.png"
    link.as = "image"
    document.head.appendChild(link)

    
    const img = new Image()
    img.src = "/batman4.png"
    
    
    img.onload = () => {
      console.log("Batman image preloaded successfully")
    }
    img.onerror = () => {
      console.error("Failed to preload batman image")
    }

    return () => {
      
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/batman4.png"
      alt=""
      style={{ display: "none", position: "absolute", width: 0, height: 0 }}
      aria-hidden="true"
      loading="eager"
    />
  )
}

