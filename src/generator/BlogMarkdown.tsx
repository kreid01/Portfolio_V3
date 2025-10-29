import { Blog } from "../components/Blog"
import { getFormattedDate } from "../utils/dateUtils"
import { Markdown, User } from "./types/types"
import { UpdateBlogButton } from "./UpdateBlogButtons"
import { MarkdownParagraph } from "./MarkdownParagraph";
import { MarkdownHeader } from "./MarkdownHeader";
import { MarkdownImage } from "./MarkdownImage";
import { MarkdownLink } from "./MarkdownLink";
import { MarkdownCode } from "./MarkdownCode";
import { Combobox, ComboboxProps, MarkdownItemType } from "@/components/ui/combobox"
import { useState } from "react";
import { Header } from "./typography/Header";
import { TypographyMuted } from "./typography/TypographyMuted";
import { Button } from "@/components/ui/button";
import { GripVertical, Trash2 } from "lucide-react";
import {
    DndContext,
    closestCenter,
    DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "@/components/ui/sortableitem";
import { useUser } from "@clerk/clerk-react";

const getMarkdown = (content: string): Markdown[] => {
    const contentArray = getContentArray(content)
    return contentArray;
}

const getContentArray = (content: string) => {
    let contentArray: Markdown[] = [];

    try {
        contentArray = JSON.parse(content ?? "[]") as Markdown[];
    } catch (e) {
        console.error("Error parsing blog content:", e);
    }

    return contentArray
}

export const BlogMarkdown: React.FC<Blog> = ({ title, created, content, _id }) => {
    const [markdown, setMarkdown] = useState(getMarkdown(content ?? "[]"));

    const handleChange = (type: MarkdownItemType) => {
        const newBlock: Markdown =
            type === "paragraph" || type === "header" || type === "list"
                ? { type, text: "Placeholder", format: "normal" }
                : type === "image"
                    ? { type, src: "", width: "medium" }
                    : type === "link"
                        ? { type, href: "", text: "" }
                        : { type, text: "" };

        const newMarkdown = [...markdown, newBlock];
        setMarkdown(newMarkdown);

        setEditingKey(newMarkdown.length - 1);
    };


    const [editingKey, setEditingKey] = useState<number>(-1)

    const handleTextChange = (input: string) => {
        if (editingKey === -1) return;

        if (input.trim() === "") {
            const filteredMarkdown = markdown.filter((_, index) => index !== editingKey);
            setMarkdown(filteredMarkdown);
            setEditingKey(-1);
            return;
        }

        const updatedMarkdown = markdown.map((item, index) =>
            index === editingKey
                ? { ...item, text: input }
                : item
        );

        setMarkdown(updatedMarkdown);
    }

    const combobox: ComboboxProps = {
        id: "blog-combobox",
        label: "Blog Options",
        items: ["code", "header", "image", "link", "paragraph", "list"],
        handleChange: handleChange
    }

    const cancelEditing = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingKey(-1);
    };

    const startEditing = (e: React.MouseEvent<HTMLDivElement>, key: number) => {
        if (!isAdmin) return;
        e.preventDefault();
        e.stopPropagation();
        setEditingKey(key);
    }

    const handleDelete = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        e.stopPropagation();
        setMarkdown((prev) => prev.filter((_, i) => i !== index));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        setMarkdown((items) => {
            const oldIndex = items.findIndex((_, i) => i.toString() === active.id);
            const newIndex = items.findIndex((_, i) => i.toString() === over.id);
            return arrayMove(items, oldIndex, newIndex);
        });
    };

    const { user } = useUser() as { user: User | null };
    const isAdmin = user?.publicMetadata.role === "admin";

    return (
        <div onClick={(e) => startEditing(e, 0)} className="bg-stone-800 text-white my-10 relative roundedmd shadow-sm p-4 border-[1px] rounded-md">
            <div className="flex justify-end gap-4 mb-4">
                {editingKey > -1 && isAdmin &&
                    <>
                        <Combobox label={combobox.label} items={combobox.items} id={combobox.id} handleChange={combobox.handleChange} />
                        {_id && <UpdateBlogButton id={_id} content={markdown} />}
                        <Button onClick={cancelEditing} size={"sm"} className="px-3 py-1">Cancel</Button>
                    </>
                }

                <TypographyMuted text={getFormattedDate(created)} />
            </div>

            <Header title={title} />
            <div className="mt-4 space-y-2">
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}>
                    <SortableContext
                        items={markdown.map((_, i) => i.toString())}
                        strategy={verticalListSortingStrategy} >
                        {markdown.map((item, i) => (
                            <SortableItem key={i} id={i.toString()}>
                                {(listeners, attributes) => (
                                    <div
                                        className={`relative group p-2 rounded-md min-h-10 ${isAdmin ? 'hover:border-gray-500 transition-colors hover:border' : ''}`}
                                        onClick={(e) => startEditing(e, i)} >
                                        {(() => {
                                            switch (item.type) {
                                                case "paragraph":
                                                    return (
                                                        <MarkdownParagraph
                                                            onChange={handleTextChange}
                                                            editing={i === editingKey}
                                                            {...item}
                                                        />
                                                    );
                                                case "header":
                                                    return (
                                                        <MarkdownHeader
                                                            onChange={handleTextChange}
                                                            editing={i === editingKey}
                                                            {...item}
                                                        />
                                                    );
                                                case "image":
                                                    return <MarkdownImage {...item} />;
                                                case "link":
                                                    return (
                                                        <MarkdownLink
                                                            onChange={handleTextChange}
                                                            editing={i === editingKey}
                                                            {...item}
                                                        />
                                                    );
                                                case "code":
                                                    return (
                                                        <MarkdownCode
                                                            onChange={handleTextChange}
                                                            editing={i === editingKey}
                                                            {...item}
                                                        />
                                                    );
                                                default:
                                                    return null;
                                            }
                                        })()}

                                        {isAdmin && <div className="absolute right-2 top-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                {...listeners}
                                                {...attributes}
                                                className="h-6 w-6 text-gray-400 hover:text-gray-700 cursor-grab active:cursor-grabbing" >
                                                <GripVertical className="h-4 w-4" />
                                            </Button>

                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(e) => handleDelete(e, i)}
                                                className="h-6 w-6 text-gray-400 hover:text-red-400" >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        }
                                    </div>
                                )}
                            </SortableItem>
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
};
