import Danny from '../assets/DannyOhio.jpg'

const Hero = () => {
    return(
        <section id="#" className=" w-full mx-auto my-16 px-8 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <div className="flex flex-col items-center text-center gap-6 lg:gap-10 lg:gap-x-32 2xl:gap-24">
                <img src={Danny} alt='danny' className="h-40 w-40 rounded-full shadow-md md:h-64 md:w-64 lg:h-96 lg:w-96 2xl:w-[32rem] 2xl:h-[32rem]"/>
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold max-w-4xl text-white text-5xl sm:text-7xl lg:text-8xl">Hello, my name is Daniel Feller</h1>
                    <p className="mx-8 my-4 max-w-4xl xsm:mx-2 2xsm:text-md sm:text-lg lg:text-2xl">I am a current graduate student and I enjoy building <strong className="text-purple-500">Web Applications</strong> and designing <strong className="text-purple-500">User Interfaces</strong>. I'm interested in a position in Software Development to apply my knowledge to the real world.</p>        
                </div>
            </div>
        </section>
    )
}

export default Hero