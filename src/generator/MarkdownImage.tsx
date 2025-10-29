import React from "react";
import { Markdown } from "./types/types";

type Props = Extract<Markdown, { type: "image" }>;

export const MarkdownImage: React.FC<Props> = ({ src, width }) => {
    const sizeClass =
        width === "small"
            ? "w-32"
            : width === "medium"
                ? "w-64"
                : "w-96";
    return <img src={src} className={`${sizeClass} rounded`} alt="" />;
};
