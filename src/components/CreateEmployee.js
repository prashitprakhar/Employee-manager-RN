import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Button, CardSection, TextInputBar, Card } from './common';

class CreateEmployee extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInputBar
                        placeholder="Employee Name"
                        label="Name" />
                </CardSection>
                <CardSection>
                    <TextInputBar
                        placeholder="Phone Number"
                        label="Phone" />
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default CreateEmployee;