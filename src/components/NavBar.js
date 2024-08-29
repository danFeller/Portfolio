import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 fixed top-0 left-0 right-0 bg-opacity-90 z-50">
            <nav className="flex justify-between items-center w-full mx-auto px-4 py-2 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                <a href='#' className=" hidden sm:flex text-2xl text-white font-bold px-1 py-2 hover:text-gray-200">Daniel Feller</a>
                <div className="flex w-3/5 flex-row-reverse justify-between sm:w-auto ml-auto">
                    <button onClick={toggleMenu} className="text-white focus:outline-none sm:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div className={`flex-col text-center sm:flex-row sm:flex ${isOpen ? 'flex' : 'hidden'} sm:gap-9 gap-1`}>
                        <li className="flex flex-col sm:flex-row gap-4 my-auto p-3">
                            <ul>
                                <a href="#Projects" className="hover:text-gray-200 font-semibold">Projects</a>
                            </ul>
                            <ul>
                                <a href="#Skills" className="hover:text-gray-200 font-semibold">Skills</a>
                            </ul>
                        </li>
                        <a href="#Contact" className="bg-green-400 text-white hover:bg-green-500 font-semibold my-2 mx-1 px-3 py-1 rounded-md shadow-lg transition duration-300">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;

// border border-t-red-600 border-l-transparent border-r-transparent border-b-transparent