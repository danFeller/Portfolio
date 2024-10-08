const Contact = () => {
    return(
        <section id="Contact" className=' m-16 w-full mx-auto px-0.5 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
            <div className="flex flex-col gap-4 text-center items-center">
                <h1 className="font-semibold text-white text-5xl sm:text-6xl lg:text-7xl">Contact Me</h1>
                <p className="text-center w-96 2xsm:text-sm sm:text-lg lg:text-xl">Want to get in touch with me? You can message me on LinkedIn or directly email me. You can also check out my projects on Github here as well.</p>
                <div className="flex 2xsm:gap-2 xsm:gap-2 sm:text-2xl md:text-3xl md:flex-row sm:gap-2 md:gap-2 my-5">
                    <a href="mailto:danielfeller2001@gmail.com" target="_blank" rel="noopener noreferrer" className=" bg-rose-400 text-white hover:bg-rose-500 hover:scale-110 font-semibold my-auto mx-1 px-5 py-2 rounded-md shadow-lg transition duration-300 xsm:px-10">Gmail</a>
                    <a href="https://www.linkedin.com/in/danielfeller2001/" target="_blank" rel="noopener noreferrer" className= " bg-sky-400 text-white hover:bg-sky-500 hover:scale-110 font-semibold my-auto mx-1 px-5 py-2 rounded-md shadow-lg transition duration-300 xsm:px-10">LinkedIn</a>
                    <a href="https://github.com/danFeller" target="_blank" rel="noopener noreferrer" className=" bg-green-400 text-white hover:bg-green-500 hover:scale-110 font-semibold my-auto mx-1 px-5 py-2 rounded-md shadow-lg transition duration-300 xsm:px-10">GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default Contact