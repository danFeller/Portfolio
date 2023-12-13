const NavBar = () => {
    return(
        <header>
            <nav className="flex gap-9 bg-gray-800 justify-between">
                <div className="flex gap-6">
                    <a href='#' className="text-2xl font-bold p-3 hover:text-gray-200">Daniel Feller</a>
                    <li className="flex gap-4 my-auto p-3">
                        <ul>
                            <a href="#About" className="hover:text-gray-200 font-semibold">About</a>
                        </ul>
                        <ul>
                            <a href="#Projects" className="hover:text-gray-200 font-semibold">Projects</a>
                        </ul>
                        <ul>
                            <a href="#Skills" className="hover:text-gray-200 font-semibold">Skills</a>
                        </ul>
                    </li>
                </div>
                <a href="#Contact" className="hover:text-gray-200 font-semibold my-auto px-8">Contact</a>
            </nav>
        </header>
    )
}

export default NavBar