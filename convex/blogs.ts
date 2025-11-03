import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("blog").collect();
    },
});

export const getBlog = query({
    args: { blogId: v.number() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("blog")
            .filter(q => q.eq(q.field("id"), args.blogId))
            .first();
    },
});

export const updateBlogContents = mutation({
    args: {
        id: v.number(),
        contents: v.string(),
        title: v.string(),
        description: v.string(),
    },
    handler: async (ctx, args) => {
        const { id, contents, title, description } = args;
        const blog = await ctx.db
            .query("blog")
            .filter(q => q.eq(q.field("id"), id))
            .first();

        if (!blog) {
            throw new Error(`Blog with id ${id} not found`);
        }

        await ctx.db.patch(blog._id, { contents, title, description });
    },
});


export const createBlog = mutation({
    handler: async (ctx) => {
        const id = (await ctx.db.query("blog").collect()).length + 1;

        await ctx.db.insert("blog", {
            id: id,
            contents: "",
            title: "",
            created: new Date().toISOString(),
            description: "",
        });
    },
});

