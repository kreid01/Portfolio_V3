import React from "react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio to showcase my projects and skills.",
        link: "https://example.com/portfolio",
    },
    {
        id: 2,
        title: "E-commerce Store",
        description: "An online store built with React and Tailwind CSS.",
        link: "https://example.com/store",
    },
    {
        id: 3,
        title: "Blog Platform",
        description: "A blogging platform with markdown support and user authentication.",
        link: "https://example.com/blog",
    },
];

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;