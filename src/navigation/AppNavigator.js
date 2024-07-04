import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../components/WelcomeScreen';
import MainScreen from '../components/MainScreen';

const Navigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator.Navigator>
                <Navigator.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Navigator.Screen name="Main" component={MainScreen} />
            </Navigator.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;