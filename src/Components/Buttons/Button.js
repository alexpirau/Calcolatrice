import React from 'react';
import './Button.scss'

const Button = props => {
    return (
        <>
        <button 
        className={props.clname}
        onClick={()=> {props.addValue(props.value, props.typeOfBtn)}}
        >{props.value}</button>
        </>
    )
}

export default Button;