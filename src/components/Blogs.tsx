import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Blog } from "./Blog";


interface BlogProps {
    onHover: (hovered: boolean) => void;
}

export const Blogs: React.FC<BlogProps> = ({ onHover }) => {
    const blogs = useQuery(api.blogs.get);

    const mid = Math.ceil((blogs?.length ?? 1) / 2);
    const firstHalf = blogs?.slice(0, mid) ?? [];
    const secondHalf = blogs?.slice(mid) ?? [];

    return (
        <div className="flex xl:flex-row flex-col w-full mt-10">
            <div className="flex flex-col items-start gap-2">
                {firstHalf.map((blog, index) => (
                    <Blog
                        onHover={onHover}
                        key={index}
                        title={blog.title}
                        description={blog.description}
                        created={blog.created}
                        _id={blog._id}
                    />
                ))}
            </div>

            <div className="flex flex-col items-start mt-10 ml-2 gap-2">
                {secondHalf.map((blog, index) => (
                    <Blog
                        onHover={onHover}
                        key={index + mid}
                        title={blog.title}
                        description={blog.description}
                        created={blog.created}
                        _id={blog._id}
                    />
                ))}
            </div>
        </div>
    );
};
