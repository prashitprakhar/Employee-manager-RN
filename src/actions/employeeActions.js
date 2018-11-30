import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_DATA_UPDATE,
    EMPLOYEE_DATA_CREATED,
    EMPLOYEE_FETCH_SUCCESS
} from './types';
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
    //console.log("Prop from EMployee Create Form : ",prop);
    //console.log("Value from EMployee Create Form : ",value);
    return ({
        type: EMPLOYEE_DATA_UPDATE,
        payload: {prop, value}
        // payload: { prop, value }
    });
};

export const employeeCreate = ({ employeeName, employeePhone, shift }) => {
    //console.log("employeeName, employeePhone, shift : ", employeeName, employeePhone, shift)
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ employeeName, employeePhone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_DATA_CREATED })
            Actions.pop()
        });
        //Actions.pop() - sends the screen back to the previous window
    };
};

export const employeeDataFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        //this .on will watch for file change for entire lifecycle of the application
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
            })
    }
}
