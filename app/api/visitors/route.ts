import { NextRequest, NextResponse } from "next/server"

// Simple in-memory visitor counter
// In production, use Redis or a database for persistence
let visitorCount = 0
const visitors = new Set<string>()

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
  
  // Add visitor if not already counted
  if (!visitors.has(ip)) {
    visitors.add(ip)
    visitorCount++
  }

  return NextResponse.json({ count: visitorCount })
}

