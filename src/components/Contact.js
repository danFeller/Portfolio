const Contact = () => {
    return(
        <section id="Contact" className='m-20 w-full mx-auto px-0.5 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
            <div className="flex flex-col gap-4 text-center items-center">
                <h1 className="font-semibold text-white text-5xl sm:text-6xl lg:text-7xl">Contact Me</h1>
                <p className="text-center w-96">Want to get in touch with me? You can message me on LinkedIn or directly email me. You can also check out my projects on Github here as well.</p>
                <div className="flex md:flex-row md:gap-3 my-5 xsm:flex-col xsm:gap-5">
                    <a href="#Contact" className="text-3xl bg-rose-400 text-white hover:bg-rose-500 hover:scale-110 font-semibold my-auto mx-1 px-5 py-2 rounded-md shadow-lg transition duration-300 xsm:px-10">Gmail</a>
                    <a href="#Contact" className= "text-3xl bg-sky-400 text-white hover:bg-sky-500 hover:scale-110 font-semibold my-auto mx-1 px-5 py-2 rounded-md shadow-lg transition duration-300 xsm:px-10">LinkedIn</a>
                    <a href="#Contact" className="text-3xl bg-green-400 text-white hover:bg-green-500 hover:scale-110 font-semibold my-auto mx-1 px-5 py-2 rounded-md shadow-lg transition duration-300 xsm:px-10">GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default Contact