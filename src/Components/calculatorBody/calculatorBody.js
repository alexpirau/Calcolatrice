import React from 'react';
import classes from './calculatorBody.module.scss';
import Display from '../Display/Display'
import Button from '../Buttons/Button';
import History from '../History/History'

const CalculatorBody = props => {
    return (
        <>
        <History value={props.initialValue}/>
        <div className={classes.CalculatorBody}>
            <Display DisplaValue={props.initialValue}/>
            {props.data.map((element, index) => {
             return <Button 
             key={index} 
             value={element.value} 
             btnType={element.type} 
             clname={element.btnClass}
             addValue={props.addValue}
             typeOfBtn={element.type}/>
             })}
        </div>

        </>
    )
}

export default CalculatorBody;