import type { NextRequest } from "next/server";
import { createHash } from "crypto";

export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

export function hashValue(value: string): string {
  const salt = process.env.IP_HASH_SALT || "";
  return createHash("sha256").update(`${salt}:${value}`).digest("hex");
}

const memoryHits = new Map<string, { count: number; resetAt: number }>();

export async function rateLimit(
  client: { incr(key: string): Promise<number>; expire(key: string, seconds: number): Promise<number> } | null,
  identifier: string,
  limit: number,
  windowSeconds: number
): Promise<boolean> {
  if (client) {
    try {
      const key = `ratelimit:${identifier}`;
      const hits = await client.incr(key);
      if (hits === 1) await client.expire(key, windowSeconds);
      return hits <= limit;
    } catch (error) {
      console.error("Redis rate limit failed:", error);
    }
  }

  const now = Date.now();
  let entry = memoryHits.get(identifier);
  if (!entry || entry.resetAt < now) {
    entry = { count: 0, resetAt: now + windowSeconds * 1000 };
    memoryHits.set(identifier, entry);
  }
  entry.count += 1;
  return entry.count <= limit;
}
