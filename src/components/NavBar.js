const NavBar = () => {
    return(
        <header className="bg-gray-800 fixed top-0 left-0 right-0">
            <nav className="border border-t-red-600 border-l-transparent border-r-transparent border-b-transparent flex gap-9 justify-between w-full mx-auto px-0.5 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                <div className="flex gap-6">
                    <a href='#' className="text-2xl text-white font-bold px-1 py-2 hover:text-gray-200 xsm:w-44">Daniel Feller</a>
                    <li className="flex gap-4 my-auto p-3">
                        <ul>
                            <a href="#Projects" className="hover:text-gray-200 font-semibold">Projects</a>
                        </ul>
                        <ul>
                            <a href="#Skills" className="hover:text-gray-200 font-semibold">Skills</a>
                        </ul>
                    </li>
                </div>
                <a href="#Contact" className="bg-green-400 text-white hover:bg-green-500 font-semibold my-auto mx-1 px-3 py-1 rounded-md shadow-lg">Contact</a>
            </nav>
        </header>
    )
}

export default NavBar

// border border-t-red-600 border-l-transparent border-r-transparent border-b-transparent