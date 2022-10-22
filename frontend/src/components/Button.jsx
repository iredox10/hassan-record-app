const Button = ({text})=>{
    return(
        <div>
            <button className="font-bold capitalize p-2 md:p-4 bg-black text-white mt-4 hover:bg-grey-500">{text}</button>
        </div>
    )
}

export default Button