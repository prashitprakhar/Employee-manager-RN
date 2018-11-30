import { combineReducers } from 'redux';
import AuthReducer from './authReducer'
import EmployeeFormReducer from './employeeFormReducer';
import EmployeeFetchReducer from './employeeFetchReducer';

export default combineReducers({
    //banana : () => []
    auth: AuthReducer,
    employeeDataUpdate: EmployeeFormReducer,
    employeeFetchReducer: EmployeeFetchReducer
})