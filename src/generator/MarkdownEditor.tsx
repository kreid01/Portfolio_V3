import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

type Props = {
    text: string;
    onChange?: (newText: string) => void;
};

export const MarkdownEditor: React.FC<Props> = ({ text, onChange }) => {
    const [value, setValue] = useState(text);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        onChange?.(e.target.value);
    };

    return (
        <Textarea
            placeholder="markdown"
            value={value}
            onChange={handleChange}
            className={`w-full p-2 rounded resize-none leading-7 [&:not(:first-child)]:mt-6`}
            minRows={1}
        />
    );
};
