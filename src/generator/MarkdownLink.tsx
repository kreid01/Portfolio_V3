import React from "react";
import { Markdown } from "./types/types";

type Props = Extract<Markdown, { type: "link" }> & {};

export const MarkdownLink: React.FC<Props> = ({ href, text }) => {

    return (
        <a href={href} className="text-blue-400 underline">
            {text}
        </a>
    );
};
