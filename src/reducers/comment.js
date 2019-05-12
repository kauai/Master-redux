const initialState = {
    data:[],
    isFetching:false,
    error:false
}

const ReducerComments = (state = initialState,{ type, data }) => {
    switch(type) {
        case 'LOAD_DATAC_REQUEST':
           return {
               isFetching:true,
               data,
               error:false
           }
        case 'LOAD_DATAC_SUCCESS':
           return {
               isFetching:false,
               data,
               error:false
           }
        case 'LOAD_DATAC_ERROR':
           return {
               isFetching:false,
               data,
               error:true
           }
        default: 
        return state
    }
}

export default ReducerComments