import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import Ingresos from '../screens/Ingresos';
import Gastos from '../screens/Gastos';
import Ahorro from '../screens/Ahorro';
import Estadisticas from '../screens/Estadisticas';

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
                <Navigator.Screen name="Ingresos" component={Ingresos} />
                <Navigator.Screen name="Gastos" component={Gastos} />
                <Navigator.Screen name="Ahorro" component={Ahorro} />
                <Navigator.Screen name="Estadisticas" component={Estadisticas} />
            </Navigator.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;