import { useState } from "react";

export interface Blog {
    title: string;
    created: string;
    description: string;
    link?: string;
}

interface BlogProps extends Blog {
    onHover: (hovered: boolean) => void;
}

export const Blog: React.FC<BlogProps> = ({
    title,
    created,
    description,
    link,
    onHover,
}) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = (isHovered: boolean) => {
        setHovered(isHovered);
        onHover(isHovered);
    };

    const getFormattedDate = (dateString: string): string => {
        const date = new Date(dateString);
        return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
    }

    return (
        <div
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className={`bg-stone-800 shadow-md text-white p-10 text-left flex-grow-0 w-full ml-auto transition-transform duration-300 hover:scale-110 ${hovered ? "z-20" : ""
                }`}
        >
            <h3 className="flex uppercase text-xs font-semibold">{title}</h3>
            <p className="text-gray-300 text-xs">{getFormattedDate(created)}</p>
            <h2 className="font-bold text-2xl my-2">{description}</h2>
        </div>
    );
};
