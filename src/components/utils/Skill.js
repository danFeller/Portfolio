const Skill = (props) => {
    const {name, image} = props
    return(
        <>
            <div className="bg-slate-800 flex flex-row gap-2 text-white text-2xl font-semibold py-2 px-3 mx-2 rounded-lg hover:scale-105 duration-300 w-48 md:w-64 lg:w-1/3">
                <img src={image} className="w-8 h-8"/>
                <h1 className="my-auto">{name}</h1>
             </div>
        </>
    )
}

export default Skill;