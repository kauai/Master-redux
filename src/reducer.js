const initialState = {
    data:[],
    isFetching:false
}
const Reducer = (state = initialState,{ type }) => {
    switch(type) {
        case 'LOAD_DATA':
           return state
        default: 
        return state
    }
}

export { Reducer }