import { LRUCache } from "lru-cache";

export function limiter() {
  const tokenCache = new LRUCache({
    ttl: 120 * 1000,//expiry time 120 sec
    max: 100,//Chance hold max 100 entries
  });

  return {
    check: async (
      limit: number,
      token: string
    ): Promise<{ allowed: boolean; retryAfter?: number }> => {
      const tokenInfo = tokenCache.get(token) as
        | { count: number; expiresAt: number }
        | undefined;

      if (!tokenInfo) {
        const now = Date.now();
        const expiresAt = now + 120 * 1000;

        tokenCache.set(token, { count: 1, expiresAt });
      } else {
        tokenInfo.count += 1;
      }

      const currentUsage = tokenInfo?.count || 1;
      const isRateLimited = currentUsage >= limit;

      return { allowed: !isRateLimited };
    },
  };
}

// The limiter function uses LRUCache to track token requests and  a rate limit.
// If a token exceeds its limit, further requests are blocked until the token expires.
// It handles rate-limiting efficiently using an in-memory cache with TTL and max capacity.