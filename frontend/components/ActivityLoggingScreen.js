import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

// ActivityLoggingScreen.js
// ... (previous imports)

const ActivityLoggingScreen = () => {
    const [activityLogs, setActivityLogs] = useState([]);

    const addActivityLog = () => {
        setActivityLogs([...activityLogs, { activityName: '', duration: '' }]);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {activityLogs.map((log, index) => (
                    <View key={index} >
                        <TextInput
                            placeholder="Activity Name"
                            value={log.activityName}
                            style={styles.input}
                            onChangeText={(text) => {
                                const updatedLogs = [...activityLogs];
                                updatedLogs[index].activityName = text;
                                setActivityLogs(updatedLogs);
                            }}
                        />
                        <TextInput
                            placeholder="Duration"
                            value={log.duration}
                            style={styles.input}
                            onChangeText={(text) => {
                                const updatedLogs = [...activityLogs];
                                updatedLogs[index].duration = text;
                                setActivityLogs(updatedLogs);
                            }}
                        />
                    </View>
                ))}
            </ScrollView>
            <Button title="Add Activity Log" onPress={addActivityLog} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 4,
        borderRadius: 5,
        backgroundColor: "#4681f4",
        color: 'white',
        fontSize: 25
    }
})

export default ActivityLoggingScreen;

