const  initialState = {
    inititalValue: '',
    db: [
            {value: '7', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '8', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '9', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '/', type: 'SYMBOL', btnClass:'btnWithOperator'},
            {value: '4', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '5', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '6', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '*', type: 'SYMBOL', btnClass:'btnWithOperator'},
            {value: '1', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '2', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '3', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '+', type: 'SYMBOL', btnClass:'btnWithOperator'},
            {value: '0', type: 'NUMBER', btnClass:'btnWithNumber'},
            {value: '.', type: 'SYMBOL', btnClass:'btnWithNumber'},
            {value: '=', type: 'SYMBOL', btnClass:'btnWithEgal'},
            {value: '-', type: 'SYMBOL', btnClass:'btnWithOperator'}
]
}


const rootReducer = (state = initialState, action) => {
   
if (action.type === "ADD") {
        if (
            state.inititalValue === '' && action.payload === '*' ||  
            state.inititalValue === '' && action.payload === '/' ||  
            state.inititalValue === '' && action.payload === '+' ||  
            state.inititalValue === '' && action.payload === '.' ||  
            state.inititalValue.charAt(state.inititalValue.length - 1) === "*" && action.tp === "SYMBOL" ||
            state.inititalValue.charAt(state.inititalValue.length - 1) === "/" && action.tp === "SYMBOL" ||
            state.inititalValue.charAt(state.inititalValue.length - 1) === "+" && action.tp === "SYMBOL" ||
            state.inititalValue.charAt(state.inititalValue.length - 1) === "-" && action.tp === "SYMBOL" ||
            state.inititalValue.charAt(state.inititalValue.length - 1) === "." && action.tp === "SYMBOL" ||
            state.inititalValue.substr(state.inititalValue.lastIndexOf('+'), state.inititalValue.length).includes('.') && action.payload === '.' ||
            state.inititalValue.substr(state.inititalValue.lastIndexOf('-'), state.inititalValue.length).includes('.') && action.payload === '.' ||
            state.inititalValue.substr(state.inititalValue.lastIndexOf('/'), state.inititalValue.length).includes('.') && action.payload === '.' ||
            state.inititalValue.substr(state.inititalValue.lastIndexOf('*'), state.inititalValue.length).includes('.') && action.payload === '.' 
            
                ) {
                    
            return {
                inititalValue: state.inititalValue + "",
                db: state.db
            }
        } else if (action.payload === '=') {
            return {
                inititalValue: eval(state.inititalValue) + '',
                db: state.db
                } 
        } else {
            console.log(state.inititalValue.substring(state.inititalValue.lastIndexOf('+'), state.inititalValue.length))
            return {
            inititalValue: state.inititalValue + action.payload,
            db: state.db
      }
   }
 }  else {
    return state
}

}



export default rootReducer;