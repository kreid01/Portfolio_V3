interface TypographyMutedProps {
    text: string
}

export const TypographyMuted: React.FC<TypographyMutedProps> = ({ text }) => {
    return <p className="text-muted-foreground text-sm">{text}</p>
}