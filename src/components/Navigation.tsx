import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from './ui/mode-toggle';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from './ui/button';

const Navigation: React.FC = () => {
    return (
        <nav className="ml-auto mr-5 pt-2 text-black">
            <ul className="flex justify-between">
                <div className='flex gap-2 mt-2 mr-4'>
                    <li className="navigation-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/blogs">Blog</Link>
                    </li>
                </div>
                <ModeToggle />
                <div className='px-2'>
                    <SignedOut>
                        <Button size={"default"}>
                            <SignInButton />
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <Button size={"icon"}>
                            <UserButton />
                        </Button>
                    </SignedIn>
                </div>
            </ul>
        </nav >
    );
};



export default Navigation;