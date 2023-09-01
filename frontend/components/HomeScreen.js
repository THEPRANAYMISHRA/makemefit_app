import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useProfileContext } from '../ProfileContext';

const HomeScreen = ({ navigation }) => {
    const { profile, updateProfile, goal, updateGoal } = useProfileContext();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.heading}>Welcome to the Fitness App!</Text>
            <Text style={styles.subHeading}>User:{profile.name ? profile.name : "user"}</Text>
            <Text style={styles.subHeading}>Goal:{goal.type ? goal.type : "mygoal"}</Text>

            <Button
                title="Set Up Profile"
                onPress={() => navigation.navigate('UserProfile')}
            />

            <Button
                title="Set Fitness Goals"
                onPress={() => navigation.navigate('GoalSet')}
            />

            <Button
                title="Log Activities"
                onPress={() => navigation.navigate('ActivityLogging')}
            />

            <Button
                title="Log Diet"
                onPress={() => navigation.navigate('DietLogging')}
            />

            <Button
                title="Track Progress"
                onPress={() => navigation.navigate('ProgressTracking')}
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

export default HomeScreen;
