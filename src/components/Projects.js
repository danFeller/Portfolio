import Project from "./utils/Project"

const Projects = () => {
    return(
        <section id="Projects" className=' m-10 w-full mx-auto px-0.5 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
             <h1 className="font-semibold text-white text-5xl text-center xsm:text-center sm:text-6xl sm:text-center lg:text-7xl">Past Projects</h1>
             <div className="my-5 flex flex-wrap gap-8 justify-center">
                <Project title='SloFashion' description="Android Budgeting App intended to raise awareness about fast fashion's negative impact on the environment"/>
                <Project title='College Hub' description="Full Stack application for organizing and joining upcoming events within your campus community"/>
                {/* <Project title='College Hub' description="Full Stack application for organizing and joining upcoming events within your campus community"/>
                <Project title='College Hub' description="Full Stack application for organizing and joining upcoming events within your campus community"/>
                <Project title='College Hub' description="Full Stack application for organizing and joining upcoming events within your campus community"/> */}
             </div>
        </section>
    )
}

export default Projects