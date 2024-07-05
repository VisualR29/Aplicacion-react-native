import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../components/WelcomeScreen';
import MainScreen from '../components/MainScreen';
import Ingresos from '../components/Ingresos';
import Gastos from '../components/Gastos';
import Ahorro from '../components/Ahorro';
import Estadisticas from '../components/Estadisticas';

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