import React from "react";
import Navigation from "../components/Navigation";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { BlogMarkdown } from "../generator/BlogMarkdown";
import { useParams } from "react-router-dom";
import { Id } from "convex/_generated/dataModel";

const Blog: React.FC = () => {
    const { id } = useParams() as { id: Id<"blog"> };
    const blog = useQuery(api.blogs.getBlog, { blogId: id });

    return (
        <div className="w-[100vw] h-[100vh] flex flex-col">
            <Navigation />
            {blog &&
                <div className="px-12 w-[100%] lg:w-[80%] md:px-32 2xl:w-[50%] mx-auto">
                    <BlogMarkdown
                        key={blog._id}
                        title={blog.title}
                        description={blog.description}
                        created={blog.created}
                        content={blog.contents}
                        _id={blog._id}
                    />
                </div>
            }
        </div>
    );
};

export default Blog;
