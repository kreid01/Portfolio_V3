import { Blog } from "./Blog";

const blogs: Blog[] = [
    { title: "React Performance Optimization", description: "Techniques to improve the performance of your React applications.", date: "2025-10-31" },
    { title: "Advanced TypeScript Patterns", description: "Deep dive into advanced TS features for scalable React apps.", date: "2025-11-10" },
    { title: "Next.js Server Actions", description: "Exploring the new Server Actions API in Next.js 15.", date: "2025-11-15" },
    { title: "Optimizing Tailwind CSS", description: "Best practices for performance and maintainability with Tailwind.", date: "2025-12-01" },
    { title: "Frontend Testing with Vitest", description: "A practical guide to using Vitest in modern React projects.", date: "2025-12-10" },
    { title: "Progressive Web Apps (PWA)", description: "Turning your React app into a reliable, offline-first PWA.", date: "2025-12-20" },
    { title: "React Compiler Insights", description: "Understanding the new React Compiler for automatic memoization.", date: "2026-01-05" },
    { title: "Design Systems with Storybook", description: "Building consistent UI components using Storybook.", date: "2026-01-15" },
    { title: "React Performance Optimization", description: "Techniques to improve the performance of your React applications.", date: "2025-10-31" },
    { title: "Advanced TypeScript Patterns", description: "Deep dive into advanced TS features for scalable React apps.", date: "2025-11-10" },
    { title: "Next.js Server Actions", description: "Exploring the new Server Actions API in Next.js 15.", date: "2025-11-15" },
    { title: "Optimizing Tailwind CSS", description: "Best practices for performance and maintainability with Tailwind.", date: "2025-12-01" },
    { title: "Frontend Testing with Vitest", description: "A practical guide to using Vitest in modern React projects.", date: "2025-12-10" },
    { title: "Progressive Web Apps (PWA)", description: "Turning your React app into a reliable, offline-first PWA.", date: "2025-12-20" },
    { title: "React Compiler Insights", description: "Understanding the new React Compiler for automatic memoization.", date: "2026-01-05" },
    { title: "Design Systems with Storybook", description: "Building consistent UI components using Storybook.", date: "2026-01-15" },
];

export const Blogs = () => {
    const mid = Math.ceil(blogs.length / 2);
    const firstHalf = blogs.slice(0, mid);
    const secondHalf = blogs.slice(mid);

    return (
        <div className="flex xl:flex-row flex-col w-full mt-10">
            <div className="flex flex-col items-start gap-2">
                {firstHalf.map((blog, index) => (
                    <Blog
                        key={index}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                    />
                ))}
            </div>

            <div className="flex flex-col items-start mt-10 ml-2 gap-2">
                {secondHalf.map((blog, index) => (
                    <Blog
                        key={index + mid}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                    />
                ))}
            </div>
        </div>
    );
};
