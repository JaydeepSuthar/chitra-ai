import env from '@/lib/env';
import * as schema from '@/db/schema'
import { drizzle } from 'drizzle-orm/postgres-js'

export const db = drizzle(env.DATABASE_URL);

export type db = typeof db;

export default db;
