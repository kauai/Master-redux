const initialState = {
    count:0
}
const counterReducer = (state = initialState,{ type, value }) => {
    switch(type) {
        case 'INCREMENT':
           return {...state,count:state.count + value}
        case 'DECREMENT':
           return {...state,count:state.count - value}
        default: 
        return state
    }
}

export default counterReducer