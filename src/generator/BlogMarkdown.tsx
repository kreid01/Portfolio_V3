import { Blog } from "../components/Blog"
import { getFormattedDate } from "../utils/dateUtils"
import { Markdown, User } from "./types/types"
import { UpdateBlogButton } from "./UpdateBlogButtons"
import { MarkdownParagraph } from "./MarkdownParagraph";
import { MarkdownHeader } from "./MarkdownHeader";
import { MarkdownLink } from "./MarkdownLink";
import { MarkdownCode } from "./MarkdownCode";
import { useState } from "react";
import { Header } from "./typography/Header";
import { TypographyMuted } from "./typography/TypographyMuted";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { MarkdownEditor } from "./MarkdownEditor";
import { Description } from "./typography/Description";

const getMarkdown = (content: string): Markdown[] => {
    const result = (content ?? "").split("\n");
    return result.map(line => {
        const type = getType(line);
        return { type, text: line } as Markdown;
    });
}

const getType = (line: string): string => {
    if (line.startsWith("# ")) return "header";
    if (line.startsWith("```")) return "code";
    return "paragraph";
}

export const BlogMarkdown: React.FC<Blog> = ({ title, created, content, description, _id }) => {
    const [markdown, setMarkdown] = useState<Markdown[]>(getMarkdown(content ?? ''));
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleTextChange = (input: string) => {
        if (!isEditing) return;
        setMarkdown(getMarkdown(input));
    }

    const cancelEditing = (e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        e?.stopPropagation();
        setIsEditing(false);
    };

    const startEditing = (e: React.MouseEvent<HTMLDivElement>, editing: boolean) => {
        if (!isAdmin) return;
        e.preventDefault();
        e.stopPropagation();
        setIsEditing(editing);
    }

    const { user } = useUser() as { user: User | null };
    const isAdmin = user?.publicMetadata.role === "admin";

    const [blogTitle, setBlogTitle] = useState<string>(title);
    const onTitleChange = (newTitle: string) => {
        if (!isEditing) return;
        setBlogTitle(newTitle);
    }

    const [blogDescription, setBlogDescription] = useState<string>(description);
    const onDescriptionChange = (newDescription: string) => {
        if (!isEditing) return;
        setBlogDescription(newDescription);
    }

    return (
        <div onClick={(e) => startEditing(e, true)} className="bg-stone-800 text-white my-10 relative roundedmd shadow-sm p-4 border-[1px] rounded-md">
            <div className="flex justify-end gap-4 mb-4">
                {isEditing && isAdmin &&
                    <>
                        {_id && <UpdateBlogButton
                            title={blogTitle}
                            description={blogDescription}
                            cancelEditing={cancelEditing} id={_id}
                            content={markdown.map(m => m.text).join("\n")} />}
                        <Button onClick={cancelEditing} size={"sm"} className="px-3 py-1">Cancel</Button>
                    </>
                }

                <TypographyMuted text={getFormattedDate(created)} />
            </div>

            <Header isEditing={isEditing} onTitleChange={onTitleChange} title={title} />
            <Description isEditing={isEditing} onDescriptionChange={onDescriptionChange} description={blogDescription} />
            <div className="mt-4 space-y-2">
                {(isEditing && isAdmin) ? <MarkdownEditor onChange={handleTextChange} text={markdown.map(m => m.text).join("\n")} /> :
                    markdown.map((item, i) => (
                        <div key={i}>
                            {(() => {
                                switch (item.type) {
                                    case "paragraph":
                                        return <MarkdownParagraph {...item} />;
                                    case "header":
                                        return <MarkdownHeader {...item} />
                                    case "link":
                                        return <MarkdownLink {...item} />
                                    case "code":
                                        return <MarkdownCode {...item} />;
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    ))}
            </div>
        </div>
    );
};
