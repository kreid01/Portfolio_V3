import { Project } from "../components/Project";

export const projects: Project[] = [
    {
        title: "MEP Embodied Carbon Tool",
        description: "A tool to calculate and visualize embodied carbon for MEP systems in buildings.",
        stack: ["C#", "WPF", "TypeScript", "React"]
    },
    {
        title: "Continuous Monitoring Platform",
        description: "An internal tool for monitoring each of our clients sites, including statistics, errors and outgoing messages.",
        stack: ["C#", "Blazor"]
    },
    {
        title: "Pump Checker",
        description: "An application to monitor and analyze artifically lifted oil well performance in real-time.",
        stack: ["C#", "Typescript", "Vue"]
    },
    {
        title: "Rouge Like Pokemon Game",
        description: "A procedurally generated turn based mobile game featuring Pokemon characters.",
        stack: ["Typescript", "React Native"],
        personal: true,
        link: "https://github.com/kreid01/Walker"
    },
    {
        title: "Homemade",
        description: "A social media platform for sharing and discovering homemade recipes, integrated with OCR for uploading recipes.",
        stack: ["Typescript", "React Native"],
        personal: true,
        link: "https://github.com/kreid01/Cooker"
    }
]