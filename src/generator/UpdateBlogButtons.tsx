import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { Markdown } from "./types/types";
import { Button } from "@/components/ui/button";

export const UpdateBlogButton = ({ id, content }: { id: Id<"blog">, content: Markdown[] }) => {
    const updateBlogContents = useMutation(api.blogs.updateBlogContents);

    const handleUpdate = async () => {
        try {
            await updateBlogContents({
                id,
                contents: JSON.stringify(content)
            });
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
