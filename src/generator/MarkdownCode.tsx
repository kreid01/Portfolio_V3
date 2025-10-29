import React, { useState } from "react";
import { Markdown } from "./types/types";
import { Textarea } from "@/components/ui/textarea";

type Props = Extract<Markdown, { type: "code" }> & {
    editing: boolean;
    onChange?: (newText: string) => void;
};

export const MarkdownCode: React.FC<Props> = ({ text, editing = false, onChange }) => {
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
                className="w-full p-2 rounded font-mono resize-none"
                minRows={1}
            />
        );
    }

    return (
        <pre className="p-2 rounded text-sm overflow-x-auto">
            <code>{value}</code>
        </pre>
    );
};
