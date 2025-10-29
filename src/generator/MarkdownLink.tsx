import React, { useState } from "react";
import { Markdown } from "./types/types";
import { Input } from "@/components/ui/input"

type Props = Extract<Markdown, { type: "link" }> & {
    editing: boolean;
    onChange?: (newText: string) => void;
};

export const MarkdownLink: React.FC<Props> = ({ href, text, editing = false, onChange }) => {
    const [value, setValue] = useState(text);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange?.(e.target.value);
    };

    if (editing) {
        return (
            <Input
                type="text"
                value={value}
                onChange={handleChange}
                className="w-full  text-blue-400 underline p-1 rounded"
            />
        );
    }

    return (
        <a href={href} className="text-blue-400 underline">
            {value}
        </a>
    );
};
