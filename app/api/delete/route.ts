import db from "@/db";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { IdSchema } from "@/lib/validator";

export async function POST(req: Request) {
    try {
        const rawData = await req.json();
        const { success, data, error } = IdSchema.safeParse(rawData);

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

        if (user.isDeleted) {
            return Response.json(
                { message: "User already deleted" },
                { status: 400 }
            );
        }
        await db
            .update(schema.users)
            .set({ isDeleted: true, deletedAt: new Date() })
            .where(eq(schema.users.deviceId, data.deviceId));

        return Response.json(
            { message: "User deleted successfully", data: user },
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
