import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../components/WelcomeScreen';

const Navigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Navigator.Navigator>
            <Navigator.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ title: 'Main' }}
            />
            <Navigator.Screen name="Profile" component={WelcomeScreen} />
        </Navigator.Navigator>
    );
};

export default AppNavigator;