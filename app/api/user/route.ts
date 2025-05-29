import db from "@/db";
import * as schema from "@/db/schema";
import { getUserSchema } from "@/lib/validator";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
    try {
        const rawData = await req.json();
        const { success, data, error } = getUserSchema.safeParse(rawData);
        if (!success) {
            return Response.json(
                { message: "Validation failed" },
                { status: 422 }
            );
        }

        const [user] = await db
            .select()
            .from(schema.users)
            .where(eq(schema.users.deviceId, data.deviceId));

        if (!user) {
            return Response.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return Response.json(
            { message: "User found successfully", data: user },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return Response.json(
            { message: "Unable to process request at the moment." },
            { status: 400 }
        );
    }
}
