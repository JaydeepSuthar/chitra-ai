import db from "@/db";
import * as schema from '@/db/schema'
import { auth } from "@/lib/auth";
import { ANDROID_PRICING_PLANS } from "@/lib/constants";
import { and, eq, sql } from "drizzle-orm";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const authUser = await auth(req);

    if (!authUser)
      return Response.json({ message: 'Authentication required', data: null, statusCode: 401 }, { status: 401 });

    const [user] = await db
      .select()
      .from(schema.users)
      .where(and(eq(schema.users.id, authUser.id), eq(schema.users.isDeleted, false)));

    if (!user)
      return Response.json(
        { message: "User not found", data: null, statusCode: 404 },
        { status: 404 }
      );

    const isPlanExists = ANDROID_PRICING_PLANS.find(it => it.productId === id);

    if (!isPlanExists)
      return Response.json(
        { message: "Plan not found", data: null, statusCode: 404 },
        { status: 404 }
      );

    await db.update(schema.users).set({ credits: sql<number>`${schema.users.credits} + ${isPlanExists.credits}` }).where(eq(schema.users.id, authUser.id));

    console.log(`User ${authUser.id} purchase ${isPlanExists.productId} and got ${isPlanExists.credits} credits`);

    return Response.json({ message: "Plan successfully purchased", data: null, statusCode: 200 }, { status: 200 });
  } catch (error) {
    console.error("Error getting product ids:", error);
    return Response.json(
      { message: "Unable to process request at the moment.", data: null, statusCode: 400 },
      { status: 400 }
    );
  }
}