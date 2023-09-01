import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const DietLoggingScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Diet Logging Screen</Text>
            <TextInput placeholder="Meal Name" />
            <TextInput placeholder="Caloric Intake" />
            <Button title="Add Diet Log" onPress={() => {
                navigation.navigate('ProgressTracking')
            }} />
        </View>
    );
};

export default DietLoggingScreen;
