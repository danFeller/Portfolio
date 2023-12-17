const Project = (props) => {
    const {title, description} = props
    return(
        <>
            <div className='py-5'>
                <div className="py-5 rounded-lg bg-slate-800 flex flex-col gap-2 h-64 hover:scale-105 duration-300">
                    <h1 className="text-6xl text-green-400 font-semibold text-center">{title}</h1>
                    <p className='px-5 w-96 text-center'>{description}</p>
                    <div className='flex flex-row'>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Project