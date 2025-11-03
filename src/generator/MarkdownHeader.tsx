import React from "react";
import { Markdown } from "./types/types";

type Props = Extract<Markdown, { type: "header" }> & {};

export const MarkdownHeader: React.FC<Props> = ({ text }) => {
    const cleanText = text.slice(1).trim();

    return (
        <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-balance">
            {cleanText}
        </h2>
    );
};
