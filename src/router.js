import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene
                    rightTitle="Add"
                    onRight={() => Actions.createEmployee()}
                    key="employeeList"
                    component={EmployeeList}
                    title="All Employee List Page"
                    initial />
                    <Scene 
                    key="createEmployee"
                    component={CreateEmployee}
                    title="Create Employee" />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;