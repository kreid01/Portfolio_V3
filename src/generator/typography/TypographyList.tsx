interface TypographyListProps {
    items: string[];
}

export const TypographyList: React.FC<TypographyListProps> = ({ items }) => {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {items.map((item,) => (<li>{item}</li>))}
        </ul>
    )
}
