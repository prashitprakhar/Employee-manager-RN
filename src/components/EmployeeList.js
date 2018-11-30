import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeeDataFetch } from './../actions';
import EmployeeListItem from './employeeListItem';
//import { employeeFetchReducer } from './../reducers'

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeDataFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        //console.log("EMPLOYEE : ",employee);
        // const toArrayConversion = employee => {
        //     const entries = Object.entries(employee);
        //     return entries.map(entry => Object.assign(entry, { 0: +entry[0] }));
        // }
        return <EmployeeListItem employee={employee} />;
        // return <EmployeeListItem employee={employee} />;
    }

    render() {
        //console.log("THis.PROPS!!!!!!!!!!!!!!!!!!!!!!!!!!!",this.props);
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
};

const mapStateToProps = state => {
    //console.log("STATE@@@@@@@@@@@@@@@@@@@@ : ",state);
    const employees = _.map(state.employeeFetchReducer, (val, uid) => {
        return { ...val, uid};
    });

    return { employees }
    // console.log("STATE : ",state);
}

export default connect(mapStateToProps, { employeeDataFetch })(EmployeeList);