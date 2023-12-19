const Project = (props) => {
    const {title, description, icons, github} = props
    const iconList = icons.map((i) => <img className="w-12 h-12" src={i}/>)


    return(
        <>
            <div className='my-3 mx-2 max-w-lg rounded-lg px-10 py-4 bg-slate-800 hover:scale-105 duration-300 sm:max-w-xl 2xl:max-w-2xl'>
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl text-green-400 font-semibold text-center">{title}</h1>
                    <p className='text-center'>{description}</p>
                    <div className='flex flex-row gap-4 my-4 justify-center'>
                        {iconList}
                    </div>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-3xl text-center px-8 py-2 my-6 w-full cursor-pointer bg-green-400 text-white hover:bg-green-500 font-semibold rounded-md shadow-lg transition duration-300">GitHub</a>
                </div>
            </div>
        </>
    )
}

export default Project