import {
    boolean,
    integer,
    pgEnum,
    pgTable,
    serial,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

const timestamps = {
    updatedAt: timestamp("updated_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at"),
};

export const loginTypeEnum = pgEnum("login_type_enum", ["Google", "Apple"]);

export const users = pgTable("users", {
    id: serial().primaryKey().notNull(),
    email: varchar({ length: 255 }).unique(),
    socialId: varchar("social_id", { length: 255 }),
    loginType: loginTypeEnum("login_type"),
    deviceType: varchar("device_type", { length: 50 }),
    deviceId: varchar("device_id", { length: 255 }).unique(),
    fcmToken: varchar("fcm_token", { length: 255 }),
    coin: integer().default(3).notNull(),
    noOfAdsWatch: integer("no_of_ads_watch").default(0).notNull(),
    isDeleted: boolean("is_deleted").default(false),
    ...timestamps,
});

export const events = pgTable("events", {
    id: serial().primaryKey().notNull(),
    eventType: varchar({ length: 255 }).notNull(),
    userId: integer(),
    ...timestamps,
});
