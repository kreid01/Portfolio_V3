import { Experience } from "./Experience"

export const AboutMe: React.FC = () => {
    return (
        <div className="text-left text-white md:w-[50%]">
            <div className="text-6xl font-bold">Kieran Reid</div>
            <div className="text-3xl font-bold mt-2 ">Software Engineer</div>
            <p className=" text-zinc-300 font-medium mt-1">I like to spend my time creating.</p>

            <Experience />
        </div>
    )
}