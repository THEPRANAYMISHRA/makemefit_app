import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressTrackingScreen = () => {
    // Placeholder data for demonstration purposes
    const userGoals = [
        { type: 'Weight Loss', target: '10 kg' },
        { type: 'Muscle Gain', target: '5 kg' },
    ];

    const loggedActivities = [
        { activity: 'Running', duration: '30 minutes' },
        { activity: 'Weight Lifting', duration: '45 minutes' },
    ];

    const progressData = [
        { goalType: 'Weight Loss', progress: 30 }, // 30% progress
        { goalType: 'Muscle Gain', progress: 60 }, // 60% progress
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Progress Tracking Screen</Text>
            <View>
                <Text style={styles.subtitle}>User Goals</Text>
                {userGoals.map((goal, index) => (
                    <Text key={index}>{`${goal.type}: ${goal.target}`}</Text>
                ))}
            </View>
            <View>
                <Text style={styles.subtitle}>Logged Activities</Text>
                {loggedActivities.map((activity, index) => (
                    <Text key={index}>{`${activity.activity} - ${activity.duration}`}</Text>
                ))}
            </View>
            <View>
                <Text style={styles.subtitle}>Progress</Text>
                {progressData.map((data, index) => (
                    <View key={index}>
                        <Text>{`${data.goalType}: ${data.progress}% progress`}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
});

export default ProgressTrackingScreen;
