import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useProfileContext } from '../ProfileContext';

const GoalSettingScreen = ({ navigation }) => {
    const { goal, updateGoal } = useProfileContext();
    const [goalType, setGoalType] = useState(null);
    const [target, setTarget] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Set Your Fitness Goal</Text>

            <TextInput
                placeholder="Enter your goal type"
                value={goalType}
                onChangeText={setGoalType}
                style={styles.input}
            />
            <Picker
                selectedValue={target}
                style={styles.input}
                onValueChange={(itemValue) => setTarget(itemValue)}
            >
                <Picker.Item label="Select goal target" value="" />
                <Picker.Item label="Lose Weight" value="lose_weight" />
                <Picker.Item label="Build Muscle" value="build_muscle" />
            </Picker>

            <Button
                title="Save Goal"
                onPress={() => {
                    if (!goalType || !target) {
                        return alert("Please fill all fields");
                    } else {
                        alert("Goal Saved!")
                        updateGoal({ type: goalType, target: target });
                        navigation.navigate('Home')
                    }
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 15
    },
    heading: {
        fontSize: 20,
        marginBottom: 10
    }
});

export default GoalSettingScreen;