
export interface TextProps {
    text: string;
}


export const TypographyHeader: React.FC<TextProps> = ({ text }) => {
    return (
        <h1 className="dark:text-white text-black scroll-m-20 text-6xl font-extrabold tracking-tight text-balance">
            {text}
        </h1>
    )
}
