import { TypographyMuted } from "@/generator/typography/TypographyMuted"
import { Experience } from "./Experience"
import { TypographyHeader } from "@/generator/typography/TypographyHeader"

export const AboutMe: React.FC = () => {
    return (
        <div className="text-left md:w-[50%]">
            <TypographyHeader text="Kieran Reid"></TypographyHeader>
            <div className="text-3xl font-bold mt-2 ">Software Engineer</div>
            <TypographyMuted text="I like to spend my time creating"></TypographyMuted>

            <Experience />
        </div>
    )
}