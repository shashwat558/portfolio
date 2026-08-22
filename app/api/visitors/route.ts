import { NextRequest, NextResponse } from "next/server"
import { redis } from "@/lib/redis"
import { getClientIp, hashValue } from "@/lib/security"

const VISITOR_COUNT_KEY = "visitor:count"
const VISITOR_IPS_KEY = "visitor:ips"
const ACTIVE_VISITORS_KEY = "active_visitors"
const ACTIVE_WINDOW_SECONDS = 60

export async function GET(req: NextRequest) {
  const client = redis()

  if (!client) {
    return NextResponse.json({ count: 0, error: "Redis not configured" }, { status: 500 })
  }

  try {
    const ip = getClientIp(req)
    const ipHash = hashValue(ip)
    const now = Date.now()

    const pipeline = client.pipeline()
    pipeline.zremrangebyscore(ACTIVE_VISITORS_KEY, "-inf", now - ACTIVE_WINDOW_SECONDS * 1000)
    pipeline.zadd(ACTIVE_VISITORS_KEY, now, ipHash)
    pipeline.expire(ACTIVE_VISITORS_KEY, ACTIVE_WINDOW_SECONDS * 2)

    const hasVisited = await client.sismember(VISITOR_IPS_KEY, ipHash)

    if (!hasVisited) {
      pipeline.sadd(VISITOR_IPS_KEY, ipHash)
      pipeline.incr(VISITOR_COUNT_KEY)
    }

    await pipeline.exec()

    const activeVisitorCount = await client.zcard(ACTIVE_VISITORS_KEY)

    return NextResponse.json({ count: activeVisitorCount })
  } catch (error) {
    console.error("Error in visitors route:", error)
    return NextResponse.json(
      { count: 0, error: "Failed to get visitor count" },
      { status: 500 }
    )
  }
}
