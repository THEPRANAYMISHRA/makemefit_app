import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
// import Storage from 'react-native-storage';


const UserProfileScreen = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);


    const SaveDataAndMoveHome = () => {
        if (!name || !age || !gender) {
            return alert("Please fill all the fields");
        } else {
            navigation.navigate('Home', { name, age, gender });
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Name:</Text>
            <TextInput
                placeholder="Enter your name"
                value={name}
                style={styles.input}
                onChangeText={setName}
            />
            <Text style={styles.heading}>Age:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />
            <Text style={styles.heading}>Gender:</Text>
            <Picker
                style={styles.input}
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
            >
                <Picker.Item label="Select gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
            </Picker>
            <Button title="Save" onPress={SaveDataAndMoveHome} />
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


export default UserProfileScreen;
