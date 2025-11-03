import React from "react";
import Navigation from "../components/Navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { BlogMarkdown } from "../generator/BlogMarkdown";
import { Button } from "@/components/ui/button";

const Blogs: React.FC = () => {
    const blogs = useQuery(api.blogs.get) ?? [];
    const createBlog = useMutation(api.blogs.createBlog);

    return (
        <div className="w-[100vw] min-h-[100vh] h-max  bg-white dark:bg-zinc-900 flex flex-col">
            <Navigation />
            <div className="px-12 w-[100%] lg:w-[80%] md:px-32 2xl:w-[50%] mx-auto">
                <Button onClick={async () => { await createBlog({ title: "", contents: "" }) }} size="sm" >
                    New Blog Post
                </Button>
                {blogs.map((blog) => (
                    <BlogMarkdown
                        key={blog._id}
                        title={blog.title}
                        description={blog.description}
                        created={blog.created}
                        content={blog.contents}
                        _id={blog._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
