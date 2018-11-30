import { EMPLOYEE_FETCH_SUCCESS } from './../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS: {
            console.log("action for Fetch : ",action);
            //return ({ ...state, [id]:action.payload})
            return action.payload;
        }
        default:
            return state;
    }
}