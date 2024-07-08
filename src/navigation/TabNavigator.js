import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/Header';
import MainStack from './MainStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={MainStack}
                options={{ headerShown: false, title: 'Home' }} />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{ title: 'Mi Perfil' }} />
        </Tab.Navigator>
    );
}