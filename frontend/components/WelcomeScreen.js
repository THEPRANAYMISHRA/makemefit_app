import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useProfileContext } from '../ProfileContext';

const WelcomeScreen = ({ navigation }) => {
    const { profile, updateProfile, goal, updateGoal } = useProfileContext();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.heading}>HealthHut</Text>
            <Text style={styles.subHeading}>Select Any One Option</Text>

            <Button
                title="User"
                onPress={() => navigation.navigate('UserLogin')}
            />

            <Button
                title="Trainer"
                onPress={() => navigation.navigate('TrainerLogin')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
    }, subHeading: {
        fontSize: 25,
        backgroundColor: 'blue',
        color: 'white',
        width: '100%'
    }
})

export default WelcomeScreen;
