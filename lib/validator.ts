import z from "zod";

export const userSchema = z.object({
  email: z.string(),
  deviceId: z.string()
});

export const generateImageSchema = z.object({
  userId: z.number(),
  prompt: z.string().trim().min(3),
  style: z.string().trim(),
  image: z.string().optional()
})