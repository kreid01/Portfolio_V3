export const Footer: React.FC = () => {
    return (
        <footer className="flex text-3xl text-white fixed bottom-10 left-32">
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="mr-auto hover:scale-110 transition-transform duration-200"
            >
                <i className="fa-brands fa-github"></i>
            </a>

            <a
                href="mailto:kieranreid2612@gmail.com"
                aria-label="Email"
                className="hover:scale-105 transition-transform ml-5 duration-200"
            >
                <i className="fa-solid fa-envelope"></i>
            </a>
        </footer >
    );
};
