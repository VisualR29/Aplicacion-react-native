import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ahorro from "../screens/Ahorro";

const Stack = createNativeStackNavigator();

export default function AhorroStack() {
    return (
        <Stack.Navigator
            initialRouteName="AhorroScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="AhorroScreen"
                component={Ahorro} />
        </Stack.Navigator>
    );
}