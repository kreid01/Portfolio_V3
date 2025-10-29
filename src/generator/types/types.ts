type TextBlock = { text: string; format: "normal" | "bold" | "italic" };

export type Markdown =
    | ({ type: "paragraph" } & TextBlock)
    | ({ type: "list" } & TextBlock)
    | ({ type: "header" } & TextBlock)
    | { type: "image"; width: "small" | "medium" | "large"; src: string }
    | { type: "link"; href: string; text: string }
    | { type: "code"; text: string };


export type User = {
    publicMetadata: { role: Role }
}

export type Role = "admin" | "user" | null;
