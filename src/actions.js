export const loadData = () => {
    return {
        type:'LOAD_DATA'
    }
}

export const decrement = value => {
    return {
        type:'DECREMENT',
        value
    }
}
