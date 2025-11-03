import React from "react";
import { Markdown } from "./types/types";

type Props = Extract<Markdown, { type: "code" }> & {};

export const MarkdownCode: React.FC<Props> = ({ text }) => {
    const cleanText = text.replace(/^```/, "").replace(/```$/, "").trim();

    return (
        <pre className="p-2 rounded text-sm overflow-x-auto">
            <code>{cleanText}</code>
        </pre>
    );
};
