import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import Ingresos from '../screens/Ingresos';
import Gastos from '../screens/Gastos';
import Ahorro from '../screens/Ahorro';
import Estadisticas from '../screens/Estadisticas';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Ingresos" component={Ingresos} />
                <Stack.Screen name="Gastos" component={Gastos} />
                <Stack.Screen name="Ahorro" component={Ahorro} />
                <Stack.Screen name="Estadisticas" component={Estadisticas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;