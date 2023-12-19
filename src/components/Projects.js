import Project from "./utils/Project"
import JavaScript from '../assets/javascript.svg'
import React from '../assets/React.svg'
import Express from '../assets/Express.svg'
import MongoDB from '../assets/MongoDB.svg'
import TailwindCSS from '../assets/tailwind.svg'
import Java from '../assets/java.svg'
import Android from '../assets/Android.svg'
import Firebase from '../assets/Firebase.svg'
import CSS from '../assets/CSS.svg'

const Projects = () => {
    return(
        <section id="Projects" className=' m-10 w-full mx-auto px-0.5 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
             <h1 className="font-semibold text-white text-5xl text-center xsm:text-center sm:text-6xl sm:text-center lg:text-7xl">Past Projects</h1>
             <div className="my-10 flex flex-row flex-wrap gap-4 justify-center">
                <Project title='SloFashion' description="Android Budgeting App intended to raise awareness about fast fashion's negative impact on the environment" icons={[Java, Android]} github="https://github.com/danFeller/SloFashion"/>
                <Project title='College Hub' description="Full Stack Javascript application for organizing and joining upcoming events within your campus community" icons={[React, JavaScript, CSS, MongoDB, Express]} github="https://github.com/danFeller/CollegeHub"/>
                <Project title='Portfolio' description="This Portfolio was built on my own with React and TailwindCSS and hosted on Firebase" icons={[React, JavaScript, TailwindCSS, Firebase]} github="https://github.com/danFeller/Portfolio"/>
             </div>
        </section>
    )
}

export default Projects