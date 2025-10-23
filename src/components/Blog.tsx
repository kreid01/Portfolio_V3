export interface Blog {
    title: string;
    date: string
    description: string;
    link?: string
}

export const Blog: React.FC<Blog> = ({ title, date, description, link }) => {
    return (
        <div className="bg-stone-800 shadow-md text-white p-10 text-left flex-grow-0 w-full ml-auto hover:scale-110">
            <h3 className="flex uppercase text-xs font-semibold">{title}</h3>
            <p className="text-gray-300 text-xs">{date}</p>
            <h2 className="font-bold text-2xl my-2">{description}</h2>
        </div>
    );
}