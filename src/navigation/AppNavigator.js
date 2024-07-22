import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Welcome'
                component={WelcomeScreen}
                options={{ title: 'Mi Finanzas' }} />
            <Stack.Screen
                name='Main'
                component={TabNavigator} />
        </Stack.Navigator>
    )
}