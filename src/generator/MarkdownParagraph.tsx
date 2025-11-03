import React from "react";
import { Markdown, BoldText, ItalicText } from "./types/types";

type Props = Extract<Markdown, { type: "paragraph" }>;

function isBoldText(text: string): text is BoldText {
    return /^\*\*(.+)\*\*$/.test(text);
}

function isItalicText(text: string): text is ItalicText {
    return /^\*(.+)\*$/.test(text);
}

export const MarkdownParagraph: React.FC<Props> = ({ text }) => {
    const words = text.split(" ");

    const getWordStyle = (word: string): { cleanWord: string; style: string } => {
        if (isBoldText(word)) {
            return { cleanWord: word.replace(/^\*\*(.+)\*\*$/, "$1"), style: "font-bold" };
        }
        if (isItalicText(word)) {
            return { cleanWord: word.replace(/^\*(.+)\*$/, "$1"), style: "italic" };
        }
        return { cleanWord: word, style: "font-normal" };
    };

    return (
        <p className="whitespace-pre-wrap leading-7 [&:not(:first-child)]:mt-6">
            {words.map((word, i) => {
                const { cleanWord, style } = getWordStyle(word);
                return (
                    <span key={i} className={style}>
                        {cleanWord}{" "}
                    </span>
                );
            })}
        </p>
    );
};
