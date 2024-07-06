import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Estadisticas from "../screens/Estadisticas";

const Stack = createNativeStackNavigator();

export default function EstadisticasStack() {
    return (
        <Stack.Navigator
            initialRouteName="EstadisticasScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="EstadisticasScreen"
                component={Estadisticas} />
        </Stack.Navigator>
    );
}