

const Shimmer = () => {
    return(
        <div className="flex flex-wrap justify-between  ">
        {Array(20).fill("").map((index)=><div className=" mx-10 border border-solid border-gray-300 w-72 h-44 p-5 mt-5 bg-gray-300 shadow-gray-300 flex basis-64 " key={index}> </div>)}
            
        </div>
    )
}

export default Shimmer;