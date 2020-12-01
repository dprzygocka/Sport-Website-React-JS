

const Button = props => {
    return(
        <button
            className="button"
            style={props.style} 
            typeof={props.typeof}
            onClick={props.onClick}
        >
            {props.placeholder}
        </button>
    )
}


export default Button;