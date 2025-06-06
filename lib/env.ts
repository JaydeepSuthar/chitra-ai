import z from "zod";

const envSchema = z.object({
  UPSTASH_REDIS_REST_URL: z.string(),
  UPSTASH_REDIS_REST_TOKEN: z.string(),
  GETIMAGE_AI_TOKEN: z.string(),
  DATABASE_URL: z.string(),
  TOKEN_SECRET: z.string(),
  TOKEN_EXPIRE_IN: z.string().default('1d'),
  ADMIN_SECRET: z.string(),
  CONTACT_EMAIL: z.email().default('contact@example.com'),
  WEBSITE_URL: z.string().default('https://example.com'),
});

export default envSchema.parse(process.env);