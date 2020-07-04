import React from 'react';
import './App.css';
import CalculatorBody from './Components/calculatorBody/calculatorBody'
import {connect} from 'react-redux';
import add from './Redux/actions/actions'

function App( props) {
  return (
    <div>
      <CalculatorBody 
      data={props.data} 
      addValue={props.addValue} 
      initialValue={props.inititalValue}/>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      data: state.db,
      inititalValue: state.inititalValue
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addValue: (value, typeOfBtn) => {dispatch(add(value, typeOfBtn))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
