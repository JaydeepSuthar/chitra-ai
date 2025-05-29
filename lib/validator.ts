import z from "zod";

export const userSchema = z.object({
    email: z.string().email(),
    socialId: z.string().min(1),
    loginType: z.enum(["Google", "Apple"]),
    deviceType: z.string().min(1),
    deviceId: z.string().min(1),
    fcmToken: z.string().optional(),
});

export const IdSchema = z.object({
    deviceId: z.string(),
});

export const generateImageSchema = z.object({
    userId: z.number(),
    prompt: z.string().trim().min(3),
    style: z.string().trim(),
    image: z.string().optional(),
});
