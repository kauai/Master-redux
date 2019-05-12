import { combineReducers } from 'redux'
import ReducerUsers from './users'
import ReducerComments from './comment'

export default combineReducers({ 
    users:ReducerUsers,
    comments:ReducerComments 
})