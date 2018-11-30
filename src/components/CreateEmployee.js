import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Button, CardSection, TextInputBar, Card } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from './../actions';

class CreateEmployee extends Component {

    onButtonPress() {
        const { employeeName, employeePhone, shift } = this.props;

        //employeeCreate - this is the Action Creator
        this.props.employeeCreate({ employeeName, employeePhone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInputBar
                        placeholder="John Doe"
                        label="Name"
                        onChangeText={value => this.props.employeeUpdate({prop: 'employeeName', value})}
                        value={this.props.employeeName}
                         />
                </CardSection>
                <CardSection>
                    <TextInputBar
                        placeholder="555-555-5555"
                        label="Phone"
                        value={this.props.employeePhone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'employeePhone', value})}
                        />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                        >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPressEvent={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { employeeName,
    employeePhone,
    shift } = state.employeeDataUpdate;

    return {
        employeeName,
        employeePhone,
        shift
    }
};

const styles = {
    pickerLabelStyle : {
        fontSize: 18,
        paddingLeft: 5
    }
}

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(CreateEmployee);