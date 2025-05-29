import { ratelimitByIp } from "@/lib/rate-limiter";

export async function GET(req: Request) {
  // const isRatelimitExceed = await ratelimitByIp();

  // if (isRatelimitExceed)
  //   return Response.json({ error: "Ratelimit Exceed" }, { status: 429 });

  return Response.json({ message: 'Welcome to Chitra AI' }, { status: 200 });
}
