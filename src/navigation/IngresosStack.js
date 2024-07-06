import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ingresos from "../screens/Ingresos";

const Stack = createNativeStackNavigator();

export default function IngresosStack() {
    return (
        <Stack.Navigator
            initialRouteName="IngresosScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="IngresosScreen"
                component={Ingresos} />
        </Stack.Navigator>
    );
}