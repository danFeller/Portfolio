import Skill from './utils/Skill'
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'
import JavaScript from '../assets/javascript.svg'
import TailwindCSS from '../assets/tailwind.svg'
import TypeScript from '../assets/Typescript.svg'
import Python from '../assets/Python.svg'
import CPlusPlus from '../assets/CPlusPlus.svg'
import Java from '../assets/java.svg'
import React from '../assets/React.svg'
import Express from '../assets/Express.svg'
import GitHub from '../assets/GitHub.svg'
import MongoDB from '../assets/MongoDB.svg'


const Skills = () => {
    return(
        <section id="Skills" className='m-16 w-full mx-auto px-0.5 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
            <h1 className="font-semibold text-center text-white text-5xl sm:text-6xl lg:text-7xl">Skills</h1>
            <div className='my-10 flex flex-row flex-wrap gap-2 justify-center'>
                <Skill name='HTML' image={HTML}/>
                <Skill name='CSS' image={CSS}/>
                <Skill name='TailwindCSS' image={TailwindCSS}/>
                <Skill name='JavaScript' image={JavaScript}/>
                <Skill name='TypeScript' image={TypeScript}/>
                <Skill name='Python' image={Python}/>
                <Skill name='C++' image={CPlusPlus}/>
                <Skill name='Java' image={Java}/>
                <Skill name='React' image={React}/>
                <Skill name='Express' image={Express}/>
                <Skill name='GitHub' image={GitHub}/>
                <Skill name='MongoDB' image={MongoDB}/>
            </div>


            <div className='my-4 flex flex-row justify-center'>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl text-center px-8 py-2 my-6 bg-green-400 text-white hover:bg-green-500 hover:scale-110 font-semibold rounded-md shadow-lg transition duration-300">My Resume</a>
            </div>
        </section>
    )
}

export default Skills