import { headers } from "next/headers";

export async function getIp() {
  // NOTE: VERCEL USE X-REAL-IP
  // @ref: https://github.com/vercel/vercel/blob/main/packages/functions/src/headers.ts
  const realIp = (await headers()).get('x-real-ip');

  if (realIp)
    return realIp.trim();

  return null;
}