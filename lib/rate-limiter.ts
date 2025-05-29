import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getIp } from "@/lib/get-ip";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, "10 s"),
});

export async function ratelimitByIp() {
  const ip = await getIp();

  console.log(`IP: ${ip}`);

  const { success } = await ratelimit.limit(`ip:${ip}`);

  if (!success)
    return true;

  return false;
}

export async function ratelimitByKey(key: string) {
  const { success } = await ratelimit.limit(key);

  if (!success)
    return true;

  return false;
}