import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav className="ml-auto mr-5">
            <ul className="flex justify-between">
                <li className="navigation-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;