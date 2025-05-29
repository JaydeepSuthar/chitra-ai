import z from "zod";

const envSchema = z.object({
  UPSTASH_REDIS_REST_URL: z.string(),
  UPSTASH_REDIS_REST_TOKEN: z.string(),
  GETIMAGE_AI_TOKEN: z.string(),
  DATABASE_URL: z.string(),
});

export default envSchema.parse(process.env);