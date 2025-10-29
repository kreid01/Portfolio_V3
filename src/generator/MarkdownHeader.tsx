import React, { useState } from "react";
import { Markdown } from "./types/types";
import { Textarea } from "@/components/ui/textarea";

type Props = Extract<Markdown, { type: "header" }> & {
    editing: boolean;
    onChange?: (newText: string) => void;
};

export const MarkdownHeader: React.FC<Props> = ({ text, editing = false, onChange }) => {
    const [value, setValue] = useState(text);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        onChange?.(e.target.value);
    };

    if (editing) {
        return (
            <Textarea
                value={value}
                onChange={handleChange}
                className="w-full !text-3xl font-semibold text p-2 rounded resize-none"
                minRows={1}
            />
        );
    }

    return <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-balance"> {value} </h2>
};
