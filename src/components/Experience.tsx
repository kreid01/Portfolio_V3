export const Jobs: Job[] = [
    {
        title: "Software Engineer",
        company: "SLB",
        dateRange: "Sept 2024 - Current"
    },
    {
        title: "Junior Developer",
        company: "Cundall",
        dateRange: "Jan 2023 - Sept 2024"
    },
]

export const Experience: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 mt-10">
            {Jobs.map((job, index) => (
                <Job
                    key={index}
                    title={job.title}
                    company={job.company}
                    dateRange={job.dateRange}
                />
            ))}
        </div>
    )
}

interface Job {
    title: string;
    company: string;
    dateRange: string;
}

export const Job: React.FC<Job> = ({ title, company, dateRange }) => {
    return (
        <div>
            <h3 className="text-md uppercase text-gray-200">{company}</h3>
            <h2 className="font-bold text-2xl mb-2">{title}</h2>
            <p className="text-gray-300 text-sm">{dateRange}</p>
        </div>
    )
}