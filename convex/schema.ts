import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

    blog: defineTable({
        contents: v.string(),
        created: v.string(),
        description: v.string(),
        title: v.string(),
    }),
});