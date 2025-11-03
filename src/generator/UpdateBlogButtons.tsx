import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export const UpdateBlogButton = ({ id, content, title, description, cancelEditing }: {
    id: number, content: string, title: string, description: string, cancelEditing: () => void
}) => {
    const updateBlogContents = useMutation(api.blogs.updateBlogContents);

    const save = async () => {
        await updateBlogContents({ id, contents: content, title: title, description: description });
        cancelEditing();
    }

    const handleUpdate = async () => {
        try {
            await save();
            return
        } catch (err) {
            console.error("Error updating blog:", err);
        }
    };

    return (
        <Button
            onClick={handleUpdate}
            size={"sm"}
            className="px-3 py-1 rounded">Save
        </Button>
    );
};
