interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            {title}
        </h1>
    )
}
