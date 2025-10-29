import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { BlogMarkdown } from "../generator/BlogMarkdown";

const Blog: React.FC = () => {
    const blogs = useQuery(api.blogs.get) ?? [];

    return (
        <div className="w-[100vw] h-[100vh] flex flex-col">
            <Navigation />
            <div className="px-32 w-[70%] 2xl:w-[50%] mx-auto">
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

export default Blog;
