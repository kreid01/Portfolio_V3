import { Input } from "@/components/ui/input";
import { useState } from "react";

interface HeaderProps {
    title: string;
    isEditing: boolean;
    onTitleChange: (newTitle: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ title, isEditing, onTitleChange }) => {
    const [value, setValue] = useState(title);
    const onChange = (newTitle: string) => {
        setValue(newTitle);
        onTitleChange(newTitle);
    }

    return (
        isEditing ? (
            <Input
                placeholder="title"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full text-center !text-4xl font-extrabold tracking-tight text-balance p-2 border rounded"
            />
        ) : (
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                {value}
            </h1>
        )
    )
}
