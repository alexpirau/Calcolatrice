import ADD from './actionsType'


 const add = (number, typeOfBtn) => {
    return {
        type: ADD,
        payload: number,
        tp: typeOfBtn
    }
}


export default add;