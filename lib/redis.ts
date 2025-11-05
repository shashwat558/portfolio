import Redis from "ioredis"

const getRedisClient = () => {
  if (!process.env.REDIS_URL) {
    console.warn("REDIS_URL not set, Redis functionality will be disabled")
    return null
  }

  try {
    const redis = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 3,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000)
        return delay
      },
    })

    redis.on("error", (err) => {
      console.error("Redis Client Error:", err)
    })

    return redis
  } catch (error) {
    console.error("Failed to create Redis client:", error)
    return null
  }
}

// Singleton pattern to reuse the same Redis connection
let redisClient: Redis | null = null

export const redis = () => {
  if (!redisClient) {
    redisClient = getRedisClient()
  }
  return redisClient
}

