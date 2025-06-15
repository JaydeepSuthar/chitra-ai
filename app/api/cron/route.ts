import type { NextRequest } from 'next/server';
import env from '@/lib/env';
import db from "@/db";
import * as schema from "@/db/schema";

export async function GET(request: NextRequest) {
    const authHeader = request.headers.get('authorization');

    if (authHeader !== `Bearer ${env.CRON_SECRET}`) {
        return new Response('Unauthorized', {
            status: 401,
        });
    }

    try {
        await db.update(schema.users).set({ noOfAdsWatch: 0 });
        console.log("Ads Count Reset");
    } catch (error) {
        console.error("cron failed");
        console.error(error);
    }

    return Response.json({ success: true });
}