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

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Preload audio without attempting to play (Firefox-safe)
    try {
      audio.volume = volume
      audio.load()
    } catch (error) {
      // Silently handle any preload errors
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
    
    audio.addEventListener("play", updatePlayingState)
    audio.addEventListener("pause", updatePlayingState)
    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("durationchange", updateDuration)

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
        clearInterval(interval)
      } catch {
        // Prevent cleanup crashes
      }
    }
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (audio.paused) {
        // Only play on explicit user interaction (Firefox-safe)
        audio.play().catch((error) => {
          // Silently handle play errors to prevent crashes
          console.error("Audio play error:", error)
        })
      } else {
        audio.pause()
      }
    } catch (error) {
      // Prevent crashes from toggle
      console.error("Audio toggle error:", error)
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

