import {
    EMPLOYEE_DATA_UPDATE,
    EMPLOYEE_DATA_CREATED
} from './../actions/types';

const INITIAL_STATE = {
    employeeName: '',
    employeePhone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    //console.log("Actions from EmployeeReducer : ",action);
    switch(action.type){
        case EMPLOYEE_DATA_UPDATE: {
            return { ...state, [action.payload.prop]: action.payload.value };
        }
        case EMPLOYEE_DATA_CREATED: {
            return INITIAL_STATE;
        }
        default:
            return state;
    }
}