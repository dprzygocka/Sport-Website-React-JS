import { checkPropTypes } from "prop-types";


const Checkbox = props => {
    
    return(
        <>
        <label for={props.value}> {props.value}</label>
        <input type="checkbox"
            className="checkbox"
            style={props.style} 
            typeof={props.typeof}
            onClick={props.onClick}
            value={props.value}
            id = {props.value}
            checked = {props.checked}
        >
            {props.text}
        </input>
        </>
    )
}


export default Checkbox;