import { IdSchema } from "@/lib/validator";
import db from "@/db";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";

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

        const coin = Math.floor(Math.random() * (10 - 3 + 1) + 3);

        await db
            .update(schema.users)
            .set({ coin })
            .where(eq(schema.users.deviceId, data.deviceId));

        return Response.json(
            { message: "Reward claimed successfully", data: coin },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            { message: "Unable to process request at the moment." },
            { status: 400 }
        );
    }
}
