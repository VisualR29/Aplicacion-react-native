import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigator from './TabNavigator';
// import { useEffect } from 'react';
// import { getSession } from '../persistence';
// import { useDispatch } from 'react-redux';
//importa serUser!!!

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    //Codigo de SQLite
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await getSession()
    //             if (response.rows.length) {
    //                 const user = response.rows._array[0]
    //                 dispatch(setUser({
    //                     email: user.email,
    //                     localId: user.localId,
    //                     idToken: user.idToken,
    //                 }))
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     })()
    // })

    return (
        <NavigationContainer
            initialRouteName="AppNavigator">
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
        </NavigationContainer>
    )
}