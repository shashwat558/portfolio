import { NextRequest, NextResponse } from "next/server"
import { redis } from "@/lib/redis"

const VISITOR_COUNT_KEY = "visitor:count"
const VISITOR_IPS_KEY = "visitor:ips"

export async function GET(req: NextRequest) {
  const client = redis()
  
  if (!client) {
    // Fallback if Redis is not available
    return NextResponse.json({ count: 0, error: "Redis not configured" }, { status: 500 })
  }

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
               req.headers.get("x-real-ip") || 
               "unknown"
    
    // Check if this IP has visited before
    const hasVisited = await client.sismember(VISITOR_IPS_KEY, ip)
    
    if (!hasVisited) {
      // Add IP to set and increment count atomically
      const pipeline = client.pipeline()
      pipeline.sadd(VISITOR_IPS_KEY, ip)
      pipeline.incr(VISITOR_COUNT_KEY)
      await pipeline.exec()
    }

    // Get current count
    const count = await client.get(VISITOR_COUNT_KEY)
    const visitorCount = count ? parseInt(count, 10) : 0

    return NextResponse.json({ count: visitorCount })
  } catch (error) {
    console.error("Error in visitors route:", error)
    return NextResponse.json(
      { count: 0, error: "Failed to get visitor count" },
      { status: 500 }
    )
  }
}

