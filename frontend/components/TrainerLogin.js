import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useProfileContext } from '../ProfileContext';

const TrainerLoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { profile, updateProfile } = useProfileContext();


    const Login = () => {
        if (!email || !password) {
            return alert("Please fill all the fields");
        } else {
            alert("Profile saved!")
            navigation.navigate('Home');
        }
    }
    return (

        <View style={styles.container}>
            <Text style={styles.heading}>Email:</Text>
            <TextInput
                placeholder="Enter your email"
                value={email}
                style={styles.input}
                onChangeText={setEmail}
            />
            <Text style={styles.heading}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={Login} />

            <Text style={styles.heading}>Don't have account?Create new!</Text>
            <Button title="Register" onPress={() => navigation.navigate('TrainerRegistration')} />
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


export default TrainerLoginScreen;
