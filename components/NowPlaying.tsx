"use client"

import Image from "next/image"

export default function NowPlaying() {
  
  return (
    <div className="mb-10 border border-border rounded p-4 flex items-center gap-4">
      <Image src="/spotify.png" alt="Spotify" width={48} height={48} className="rounded" />
      <div className="flex-1">
        <p className="text-sm">Not playing right now</p>
        <p className="text-xs text-muted-foreground">Spotify status</p>
      </div>
    </div>
  )
}
