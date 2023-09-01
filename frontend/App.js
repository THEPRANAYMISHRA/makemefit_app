import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from './components/UserProfileScreen';
import HomeScreen from './components/HomeScreen';
import GoalSettingScreen from './components/GoalSettingScreen';
import ActivityLoggingScreen from './components/ActivityLoggingScreen';
import DietLoggingScreen from './components/DietLoggingScreen';
import ProgressTrackingScreen from './components/ProgressTrackingScreen';
import { ProfileProvider } from './ProfileContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="GoalSet" component={GoalSettingScreen} />
          <Stack.Screen name="ActivityLogging" component={ActivityLoggingScreen} />
          <Stack.Screen name="DietLogging" component={DietLoggingScreen} />
          <Stack.Screen name="ProgressTracking" component={ProgressTrackingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}
