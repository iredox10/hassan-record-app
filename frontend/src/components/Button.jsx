const Button = ({text,action})=>{
    return(
        <div>
            <button className="font-bold capitalize p-2 md:p-4 bg-[#5e5e5e] shadow-lg  text-white mt-4 hover:bg-gray-500" onClick={action}>{text}</button>
        </div>
    )
}

export default Button