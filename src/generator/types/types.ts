type Header = `#${string}`;
type ListItem = `- ${string}`;

export type BoldText = `**${string}**`;
export type ItalicText = `*${string}*`;
export type LinkText = `$$${string}$$`
export type PlainText = Exclude<string, BoldText | ItalicText | LinkText>;
type CodeText = `\`\`\`${string}\`\`\``;


export type Markdown =
    | ({ type: "paragraph" } & { text: PlainText | BoldText | ItalicText; format: "normal" | "bold" | "italic" })
    | ({ type: "list" } & { text: ListItem })
    | ({ type: "header" } & { text: Header })
    | { type: "link"; href: string; text: LinkText }
    | { type: "code"; text: CodeText };


export type User = {
    publicMetadata: { role: Role }
}

export type Role = "admin" | "user" | null;
