import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';

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