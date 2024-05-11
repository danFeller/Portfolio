import Danny from '../assets/DannyOhio.jpg'

const Hero = () => {
    return(
        <section id="#" className=" w-full mx-auto my-16 px-8 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <div className="flex flex-col items-center text-center gap-6 lg:flex-row-reverse lg:justify-between lg:text-left lg:gap-20 lg:gap-x-32 2xl:gap-96">
                <img src={Danny} alt='danny' className="h-40 w-40 rounded-full shadow-md lg:rounded-lg md:h-64 md:w-64 lg:h-96 lg:w-96 xl:rounded-2xl 2xl:w-[32rem] 2xl:h-[32rem] 2xl:rounded-3xl"/>
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-white text-5xl sm:text-6xl lg:text-7xl">Hello, my name is Daniel Feller</h1>
                    <p className="mx-8 my-4 xsm:mx-2 2xsm:text-sm">I am a current graduate student and I enjoy building <strong className="text-purple-500">Web Applications</strong> and designing <strong className="text-purple-500">User Interfaces</strong>. I'm interested in a position in Software Development to apply my knowledge to the real world.</p>        
                </div>
            </div>
        </section>
    )
}

export default Hero