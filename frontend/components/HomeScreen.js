import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
    const { name, age, gender } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Home Screen!</Text>
            <Text>{name + age + gender}</Text>
            <Button
                title="Let's set your goals!"
                onPress={() => navigation.navigate('GoalSet')}
            />
        </View>
    );
};

export default HomeScreen;
