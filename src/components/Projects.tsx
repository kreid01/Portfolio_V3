import { projects } from "../data/Projects";
import { Project } from "./Project";

interface ProjectsProps {
    onHover: (hovered: boolean) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onHover }) => {
    return (
        <div className="flex flex-col items-center gap-2 ml-auto">
            {projects.map((project: Project, index: number) => {
                const content = (
                    <Project
                        onHover={onHover}
                        key={index}
                        title={project.title}
                        description={project.description}
                        stack={project.stack}
                        image={project.image}
                        personal={project.personal}
                    />
                );

                return project.personal && project.link ? (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex justify-center" >
                        {content}
                    </a>
                ) : (
                    <div key={index} className="w-full flex justify-center">
                        {content}
                    </div>
                );
            })}
        </div>
    )
}