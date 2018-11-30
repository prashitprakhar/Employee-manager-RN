import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {
    
    render() {
        //console.log("@@@@@@@@@@@@@@@@@@@@@@@@",this.props);
        const { employeeName } = this.props.employee;
        //console.log("this.props : ",this.props);
        return(
            <CardSection>
                <Text style={styles.nameTextStyle}>{ employeeName }</Text>
            </CardSection>
        )
    }
}

const styles = {
    nameTextStyle : {
        fontSize: 18,
        paddingLeft: 10
    }
}

export default EmployeeListItem;