import Axios from "axios";


export const loadDataRequest = () => {
    return {
        type:'LOAD_DATA_REQUEST',
    }
}

export const loadDataSuccess = (data) => {
    return {
        type:'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadDataError = (error) => {
    return {
        type:'LOAD_DATA_ERROR',
        data:[],
        error
    }
}


export const loadData = () => {
    return dispatch => {
       dispatch(loadDataRequest())
       // dispatch(loadDataSuccess({teste:"kauai testando"}))
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then(({ data }) => {
           dispatch(loadDataSuccess(data))
       }).catch(error => {
           dispatch(loadDataError(error))
       })
    }
}


// export const loadData = () => {
//     return dispatch => (
//         setTimeout(() => {
//             dispatch(loadDataRequest())
//         },3000)
//     )
// }

export const decrement = value => {
    return {
        type:'DECREMENT',
        value
    }
}
