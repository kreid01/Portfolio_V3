import React, { useState } from "react";
import { Markdown } from "./types/types";
import { Textarea } from "@/components/ui/textarea";

type Props = Extract<Markdown, { type: "paragraph" }> & {
    editing: boolean;
    onChange?: (newText: string) => void;
};

export const MarkdownParagraph: React.FC<Props> = ({ text, format, editing = false, onChange }) => {
    const [value, setValue] = useState(text);

    const style =
        format === "bold"
            ? "font-bold"
            : format === "italic"
                ? "italic"
                : "font-normal";

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        onChange?.(e.target.value);
    };

    if (editing) {
        return (
            <Textarea
                value={value}
                onChange={handleChange}
                className={`w-full ${style} p-2 rounded resize-none leading-7 [&:not(:first-child)]:mt-6`}
                minRows={1}
            />
        );
    }

    return <p className={`${style} whitespace-pre-wrap leading-7 [&:not(:first-child)]:mt-6`}> {value} </p>
};
