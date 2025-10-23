export interface Project {
    title: string;
    description: string;
    stack: string[]
    image?: string;
    personal?: boolean;
    link?: string
}

export const Project: React.FC<Project> = ({ title, description, image, stack, personal }) => {
    return (
        <div className="bg-stone-800 shadow-md text-white p-8 text-left flex-grow-0 ml-auto w-full hover:scale-110">
            <div className="flex uppercase text-xs font-semibold">{stack.map((tech: string) => <h2 className="mr-4">{tech}</h2>)}</div>
            <h2 className="font-bold my-2">{title}</h2>
            <p className="text-gray-300 text-xs">{description}</p>
        </div>
    )
}