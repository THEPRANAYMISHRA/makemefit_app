import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from './components/UserProfileScreen';
import HomeScreen from './components/HomeScreen';
import GoalSettingScreen from './components/GoalSettingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserProfile'>
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GoalSet" component={GoalSettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
