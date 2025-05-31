import db from "@/db";
import * as schema from "@/db/schema";
import { generateToken } from "@/lib/jwt";
import { userSchema } from "@/lib/validator";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    try {
        const rawData = await req.json();
        const { success, data, error } = userSchema.safeParse(rawData);

        if (!success)
            return Response.json(
                { message: "Validation failed" },
                { status: 422 }
            );

        const [isUserExists] = await db
            .select()
            .from(schema.users)
            .where(eq(schema.users.email, data.email));

        if (isUserExists) {
            const accessToken = generateToken(isUserExists);
            const refreshToken = generateToken(isUserExists);

            return Response.json(
                { message: "Welcome to Chitra AI", data: { ...isUserExists, accessToken, refreshToken } },
                { status: 200 }
            );
        }

        const [isDeviceExists] = await db
            .select()
            .from(schema.users)
            .where(eq(schema.users.deviceId, data.deviceId));

        if (isDeviceExists)
            return Response.json(
                { message: "User with same device already exists" },
                { status: 400 }
            );

        const [user] = await db.insert(schema.users).values(data).returning();

        const accessToken = generateToken(user);
        const refreshToken = generateToken(user);

        return Response.json(
            { message: "Welcome to Chitra AI", data: { ...user, accessToken, refreshToken } },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return Response.json(
            { message: "Unable to process request at the moment." },
            { status: 400 }
        );
    }
}
