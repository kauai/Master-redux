const initialState = {
    data:[],
    isFetching:false,
    error:false
}
const Reducer = (state = initialState,{ type, data }) => {
    switch(type) {
        case 'LOAD_DATA_REQUEST':
           return {
               isFetching:true,
               data:[],
               error:false
           }
        case 'LOAD_DATA_SUCCESS':
           return {
               isFetching:false,
               data,
               error:false
           }
        case 'LOAD_DATA_ERROR':
           return {
               isFetching:false,
               data,
               error:true
           }
        default: 
        return state
    }
}

export { Reducer }