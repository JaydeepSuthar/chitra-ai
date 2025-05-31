import db from "@/db";
import * as schema from "@/db/schema";
import { auth } from "@/lib/auth";
import { IdSchema } from "@/lib/validator";
import { eq, sql } from "drizzle-orm";

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
                { message: "User has been deleted" },
                { status: 400 }
            );
        }

        return Response.json(
            { message: "User found successfully", data: user },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching user:", error);
        return Response.json(
            { message: "Unable to process request at the moment." },
            { status: 400 }
        );
    }
}

export async function GET(req: Request) {
    try {
        const authUser = await auth(req);

        if (!authUser)
            return Response.json({ message: 'Please login first to delete user' }, { status: 400 });

        const [user] = await db.select().from(schema.users).where(eq(schema.users.id, authUser.id));

        if (!user)
            return Response.json({ message: 'User not found' }, { status: 404 });

        return Response.json({ message: 'User details', data: user }, { status: 200 });
    } catch (error) {
        console.error("Unable to get user details:", error);
        return Response.json({ message: "Unable to process request at the moment." }, { status: 400 });
    }
}

export async function DELETE(req: Request) {
    try {
        const authUser = await auth(req);

        if (!authUser)
            return Response.json({ message: 'Please login first to delete user' }, { status: 400 });

        const [user] = await db.select().from(schema.users).where(eq(schema.users.id, authUser.id));

        if (!user)
            return Response.json({ message: 'User not found' }, { status: 404 });

        await db.update(schema.users).set({ isDeleted: true, deletedAt: sql`now()` });

        return Response.json({ message: 'User deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return Response.json({ message: "Unable to process request at the moment." }, { status: 400 });
    }
}
