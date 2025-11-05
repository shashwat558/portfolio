"use client"

import { useEffect, useRef, useState, createContext, useContext } from "react"

interface AudioContextType {
  audio: HTMLAudioElement | null
  isPlaying: boolean
  togglePlay: () => void
  setVolume: (volume: number) => void
  volume: number
  currentTime: number
  duration: number
}

const AudioContext = createContext<AudioContextType | null>(null)

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudio must be used within BackgroundAudio")
  }
  return context
}

interface BackgroundAudioProps {
  src: string
  loop?: boolean
  volume?: number
  children?: React.ReactNode
}

export default function BackgroundAudio({ 
  src, 
  loop = true, 
  volume: initialVolume = 0.5,
  children 
}: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(initialVolume)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const hasUserInteractedRef = useRef(false)
  const hasStartedPlayingRef = useRef(false)

  
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

 
    const startPlayingOnInteraction = async () => {
      if (hasStartedPlayingRef.current || !audio.paused) return
      
      hasStartedPlayingRef.current = true
      hasUserInteractedRef.current = true

      try {
      
        if (audio.readyState < 2) {
          const playWhenReady = () => {
            audio.play().catch((error) => {
              console.error("Failed to start audio on interaction:", error)
            })
          }
          audio.addEventListener("canplay", playWhenReady, { once: true })
          audio.load()
        } else {
        
          await audio.play()
        }
      } catch (error) {
        console.error("Error starting audio on interaction:", error)
      }
    }

   
    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove']
    
    events.forEach(eventType => {
      document.addEventListener(eventType, startPlayingOnInteraction, { once: true, passive: true })
    })

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, startPlayingOnInteraction)
      })
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

   
    try {
      audio.volume = volume
      
      if (audio.readyState === 0) {
        audio.load()
      }
      console.log("Audio initialized - readyState:", audio.readyState, "src:", audio.src)
    } catch (error) {
      console.error("Audio preload error:", error)
    }

    const updatePlayingState = () => {
      try {
        setIsPlaying(!audio.paused)
      } catch {
        
      }
    }
    
 
    const updateTime = () => {
      try {
        if (audio && !isNaN(audio.currentTime)) {
          setCurrentTime(audio.currentTime)
          if (!isNaN(audio.duration)) {
            setDuration(audio.duration)
          }
        }
      } catch {
        
      }
    }
    
    const updateDuration = () => {
      try {
        if (audio && !isNaN(audio.duration)) {
          setDuration(audio.duration)
        }
      } catch {
        
      }
    }
    
   
    const handleError = (e: Event) => {
      const audio = e.target as HTMLAudioElement
      console.error("Audio error:", e)
      console.error("Error code:", audio.error?.code)
      console.error("Error message:", audio.error?.message)
      setIsPlaying(false)
    }

    
    const handleCanPlay = () => {
      console.log("Audio can play - readyState:", audio.readyState)
    }
    
    
    const handleLoadedData = () => {
      console.log("Audio loaded - readyState:", audio.readyState)
    }

    audio.addEventListener("play", updatePlayingState)
    audio.addEventListener("pause", updatePlayingState)
    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("durationchange", updateDuration)
    audio.addEventListener("error", handleError)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("loadeddata", handleLoadedData)

    const interval = setInterval(() => {
      try {
        updateTime()
      } catch {
        
      }
    }, 100)

    return () => {
      try {
        audio.removeEventListener("play", updatePlayingState)
        audio.removeEventListener("pause", updatePlayingState)
        audio.removeEventListener("timeupdate", updateTime)
        audio.removeEventListener("loadedmetadata", updateDuration)
        audio.removeEventListener("durationchange", updateDuration)
        audio.removeEventListener("error", handleError)
        audio.removeEventListener("canplay", handleCanPlay)
        audio.removeEventListener("loadeddata", handleLoadedData)
        clearInterval(interval)
      } catch {
        
      }
    }
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) {
      console.error("Audio element not found")
      return
    }

    console.log("togglePlay called - paused:", audio.paused, "readyState:", audio.readyState)

  
    hasUserInteractedRef.current = true

    if (audio.paused) {
      
      if (audio.readyState === 0) {
        audio.load()
        
        audio.addEventListener("canplay", () => {
          console.log("Audio ready, attempting to play...")
          const playPromise = audio.play()
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("Audio started playing")
              })
              .catch((error) => {
                console.error("Failed to play audio:", error)
                console.error("Audio readyState:", audio.readyState)
                console.error("Audio error:", audio.error)
                setIsPlaying(false)
              })
          }
        }, { once: true })
        return
      }

      
      const playPromise = audio.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio started playing")
            
          })
          .catch((error) => {
            console.error("Failed to play audio:", error)
            console.error("Audio readyState:", audio.readyState)
            console.error("Audio error:", audio.error)
            setIsPlaying(false)
          })
      } else {
        
        setIsPlaying(true)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const setVolume = (newVolume: number) => {
    const audio = audioRef.current
    if (!audio) return
    
    setVolumeState(newVolume)
    audio.volume = newVolume
  }

  const contextValue: AudioContextType = {
    audio: audioRef.current,
    isPlaying,
    togglePlay,
    setVolume,
    volume,
    currentTime,
    duration,
  }

  return (
    <AudioContext.Provider value={contextValue}>
      <audio 
        ref={audioRef} 
        src={src} 
        loop={loop} 
        preload="auto"
      />
      {children}
    </AudioContext.Provider>
  )
}

