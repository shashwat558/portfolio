"use client"

import { useAudio } from "./BackgroundAudio"
import { Play, Pause, Volume2 } from "lucide-react"

interface AudioPlayerProps {
  songName?: string
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return "0:00"
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

export default function AudioPlayer({ songName = "Now Playing" }: AudioPlayerProps) {
  const { isPlaying, togglePlay, currentTime, duration } = useAudio()
  
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  const handleClick = () => {
    console.log("Play button clicked!")
    togglePlay()
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-10 md:right-10 z-50 bg-background/90 backdrop-blur-sm border border-border rounded-lg shadow-lg p-3 min-w-[280px] max-w-[calc(100vw-3rem)]">
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={handleClick}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
          type="button"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium truncate">{songName}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-foreground rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
          </div>
        </div>
        
        <Volume2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </div>
    </div>
  )
}

