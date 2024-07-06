import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gastos from '../screens/Gastos';
import Ingresos from '../screens/Ingresos';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                // screenOptions={({ route }) => ({
                //     header: () => {
                //         return <Header title={route.name} />;
                //     },
                //     tabBarShowLabel: false,
                //     tabBarStyle: styles.tabBar,
                // })}
            >
                <Tab.Screen name="Ingresos" component={Ingresos} />
                <Tab.Screen name="Gastos" component={Gastos} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigator