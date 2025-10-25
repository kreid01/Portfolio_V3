import React, { useState } from "react";

export interface Project {
    title: string;
    description: string;
    stack: string[];
    image?: string;
    personal?: boolean;
    link?: string;
}

interface ProjectProps extends Project {
    onHover: (hovered: boolean) => void;
}

export const Project: React.FC<ProjectProps> = ({
    title,
    description,
    stack,
    onHover,
}) => {
    const [hovered, setHovered] = useState(false);

    const updateHovered = (isHovered: boolean) => {
        setHovered(isHovered);
        onHover(isHovered);
    }

    return (
        <div
            onMouseEnter={() => updateHovered(true)}
            onMouseLeave={() => updateHovered(false)}
            className={`relative bg-stone-800 shadow-md text-white p-8 text-left w-full transition-transform duration-300 hover:scale-110 ${hovered ? 'z-40' : 'z-10'}`}
        >
            <div className="flex uppercase text-xs font-semibold mb-2">
                {stack.map((tech) => (
                    <h2 key={tech} className="mr-4">
                        {tech}
                    </h2>
                ))}
            </div>
            <h2 className="font-bold my-2">{title}</h2>
            <p className="text-gray-300 text-xs">{description}</p>
        </div>
    );
};
