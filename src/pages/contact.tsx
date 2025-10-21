import React from 'react';
import Navigation from '../components/Navigation';

const Contact: React.FC = () => {
    return (
        <div className="p-8 text-center w-[100vw] flex flex-col">
            <Navigation />
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out at:</p>
            <a href="mailto:your-email@example.com">
                your-email@example.com
            </a>
        </div>
    );
};

export default Contact;
