import { useState } from "react";
import { getFormattedDate } from "../utils/dateUtils";
import { Link } from "react-router-dom";

export interface Blog {
    title: string;
    created: string;
    description: string;
    content?: string;
    link?: string;

    id: number;
}

interface BlogProps extends Blog {
    onHover: (hovered: boolean) => void;
}

export const Blog: React.FC<BlogProps> = ({
    title,
    created,
    description,
    onHover,
    id
}) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = (isHovered: boolean) => {
        setHovered(isHovered);
        onHover(isHovered);
    };

    return (
        <Link to={`/blog/${id}`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className={`bg-stone-800 shadow-md text-white p-10 text-left flex-grow-0 w-full ml-auto transition-transform duration-300 hover:scale-110 ${hovered ? "z-20" : ""}`}
        >
            <h3 className="flex uppercase text-xs font-semibold">{title}</h3>
            <p className="text-gray-300 text-xs">{getFormattedDate(created)}</p>
            <h2 className="font-bold text-2xl my-2">{description}</h2>
        </Link>
    );
};
