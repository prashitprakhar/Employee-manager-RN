import { combineReducers } from 'redux';
import AuthReducer from './authReducer'
export default combineReducers({
    //banana : () => []
    auth: AuthReducer
})