const Button = (props) => {
    
    return (
        <button onClick={props.onclick} className="mt-10 py-3 px-16 text-[15px] text-primary font-semibold tracking-wider bg-secondary rounded-lg mr-5 mb-52">
            {props.label}

        </button>
    
    )
}
   

export default Button