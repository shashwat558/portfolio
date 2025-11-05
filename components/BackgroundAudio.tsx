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

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set volume and preload
    try {
      audio.volume = volume
      audio.load()
    } catch (error) {
      console.error("Audio preload error:", error)
    }

    // Update playing state
    const updatePlayingState = () => {
      try {
        setIsPlaying(!audio.paused)
      } catch {
        // Prevent crashes from state updates
      }
    }
    
    // Update time
    const updateTime = () => {
      try {
        if (audio && !isNaN(audio.currentTime)) {
          setCurrentTime(audio.currentTime)
          if (!isNaN(audio.duration)) {
            setDuration(audio.duration)
          }
        }
      } catch {
        // Prevent crashes from time updates
      }
    }
    
    const updateDuration = () => {
      try {
        if (audio && !isNaN(audio.duration)) {
          setDuration(audio.duration)
        }
      } catch {
        // Prevent crashes
      }
    }
    
    // Handle audio errors
    const handleError = (e: Event) => {
      console.error("Audio error:", e)
      setIsPlaying(false)
    }

    // Handle when audio is ready to play
    const handleCanPlay = () => {
      // Audio is ready, but don't auto-play
    }

    audio.addEventListener("play", updatePlayingState)
    audio.addEventListener("pause", updatePlayingState)
    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("durationchange", updateDuration)
    audio.addEventListener("error", handleError)
    audio.addEventListener("canplay", handleCanPlay)

    // Update time on interval for smoother progress
    const interval = setInterval(() => {
      try {
        updateTime()
      } catch {
        // Prevent interval crashes
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
        clearInterval(interval)
      } catch {
        // Prevent cleanup crashes
      }
    }
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) {
      console.error("Audio element not found")
      return
    }

    try {
      if (audio.paused) {
        // Mark that user has interacted
        hasUserInteractedRef.current = true
        
        // Ensure audio is ready
        if (audio.readyState < 2) {
          // Audio not ready yet, wait for canplay
          audio.addEventListener("canplay", () => {
            audio.play().catch((error) => {
              console.error("Audio play error:", error)
              setIsPlaying(false)
            })
          }, { once: true })
        } else {
          // Audio is ready, play it
          const playPromise = audio.play()
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Play event will update state via updatePlayingState
                console.log("Audio playing successfully")
              })
              .catch((error) => {
                console.error("Audio play error:", error)
                setIsPlaying(false)
              })
          }
        }
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      // Log error but don't crash
      console.error("Audio toggle error:", error)
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
        crossOrigin="anonymous"
      />
      {children}
    </AudioContext.Provider>
  )
}

