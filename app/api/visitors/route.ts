import { NextRequest, NextResponse } from "next/server"
import { redis } from "@/lib/redis"

const VISITOR_COUNT_KEY = "visitor:count"
const VISITOR_IPS_KEY = "visitor:ips"

export async function GET(req: NextRequest) {
  const client = redis()
  
  if (!client) {
    
    return NextResponse.json({ count: 0, error: "Redis not configured" }, { status: 500 })
  }

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
               req.headers.get("x-real-ip") || 
               "unknown"
    
    await client.set(`active_visitors:${ip}`, "true", "EX", 60);

    const activeVisitors = await client.keys("active_visitors:*")
    const activeVisitorCount = activeVisitors.length

    const hasVisited = await client.sismember(VISITOR_IPS_KEY, ip)
    
    if (!hasVisited) {
      
      const pipeline = client.pipeline()
      pipeline.sadd(VISITOR_IPS_KEY, ip)
      pipeline.incr(VISITOR_COUNT_KEY)
      await pipeline.exec()
    }

    
    const count = await client.get(VISITOR_COUNT_KEY)
    const visitorCount = count ? parseInt(count, 10) : 0
    console.log(visitorCount)

    return NextResponse.json({ count: activeVisitorCount })
  } catch (error) {
    console.error("Error in visitors route:", error)
    return NextResponse.json(
      { count: 0, error: "Failed to get visitor count" },
      { status: 500 }
    )
  }
}

