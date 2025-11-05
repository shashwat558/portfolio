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

    // Force immediate preload
    audio.load()

    // Set volume
    audio.volume = volume

    // Update playing state
    const updatePlayingState = () => setIsPlaying(!audio.paused)
    
    // Update time
    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
    }
    
    const updateDuration = () => {
      setDuration(audio.duration || 0)
    }
    
    // Handle when audio is ready to play
    const handleCanPlay = () => {
      // Audio is ready, try to play if autoplay was prevented
      if (audio.paused) {
        audio.play().catch(() => {
          // Ignore autoplay errors
        })
      }
    }
    
    audio.addEventListener("play", updatePlayingState)
    audio.addEventListener("pause", updatePlayingState)
    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("durationchange", updateDuration)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("canplaythrough", handleCanPlay)

    // Try to play audio
    const playAudio = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.log(error)
        console.log("Autoplay prevented. Audio will play on user interaction.")
      }
    }

    // Try to play when component mounts
    playAudio()

    // Also try to play on any user interaction
    const handleUserInteraction = () => {
      if (audio.paused) {
        audio.play().catch(() => {
          // Ignore errors
        })
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("keydown", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    // Update time on interval for smoother progress
    const interval = setInterval(updateTime, 100)

    return () => {
      audio.removeEventListener("play", updatePlayingState)
      audio.removeEventListener("pause", updatePlayingState)
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("durationchange", updateDuration)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("canplaythrough", handleCanPlay)
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
      clearInterval(interval)
    }
  }, [volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
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

