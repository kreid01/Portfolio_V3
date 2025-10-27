import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("blog").collect();
    },
});

export const updateBlogContents = mutation({
    args: { id: v.id("blog"), contents: v.string() },
    handler: async (ctx, args) => {
        const { id, contents } = args;
        await ctx.db.patch(id, { contents });
    },
});