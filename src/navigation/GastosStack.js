import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gastos from "../screens/Gastos";

const Stack = createNativeStackNavigator();

export default function GastosStack() {
    return (
        <Stack.Navigator
            initialRouteName="GastosScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="GastosScreen"
                component={Gastos} />
        </Stack.Navigator>
    );
}