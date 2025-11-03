import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("blog").collect();
    },
});

export const getBlog = query({
    args: { blogId: v.id("blog") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.blogId);
    },
});

export const updateBlogContents = mutation({
    args: { id: v.id("blog"), contents: v.string(), title: v.string() },
    handler: async (ctx, args) => {
        const { id, contents, title } = args;
        await ctx.db.patch(id, { contents, title });
    },
});

export const createBlog = mutation({
    args: {
        contents: v.string(),
        title: v.string()
    },
    handler: async (ctx, args) => {
        const { contents, title } = args;
        await ctx.db.insert("blog", { contents, title, created: new Date().toISOString(), description: "" });
    },
});

