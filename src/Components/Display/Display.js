import React from 'react';
import classes from './Display.module.scss'

const Display = props => {
    return (
        <div className={classes.Display}>
            <input className={classes.input} 
            value={props.DisplaValue}/>
        </div>
    )
}

export default Display;