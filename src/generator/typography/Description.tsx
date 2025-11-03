
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface DescriptionProps {
    description: string;
    isEditing: boolean;
    onDescriptionChange: (newDescription: string) => void;
}

export const Description: React.FC<DescriptionProps> = ({ description, isEditing, onDescriptionChange }) => {
    const [value, setValue] = useState(description);
    const onChange = (newDescription: string) => {
        setValue(newDescription);
        onDescriptionChange(newDescription);
    }

    return isEditing &&
        <Input
            placeholder="description"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full text-center !text-lg font-extrabold tracking-tight text-balance p-2 border rounded"
        />
}
