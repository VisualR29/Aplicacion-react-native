import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/Singup';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={Signup} name="Signup" />
        </Stack.Navigator>
    );
}

export default AuthStack