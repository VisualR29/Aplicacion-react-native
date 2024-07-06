import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import GastosStack from "./GastosStack";
import IngresosStack from "./IngresosStack";
import AhorroStack from "./AhorroStack";
import EstadisticasStack from "./EstadisticasStack";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="MainScreen"
        >
            <Stack.Screen
                name="Home"
                component={MainScreen}
                options={{ title: 'Home' }} />
            <Stack.Screen
                name="Ingresos"
                component={IngresosStack}
                options={{ title: 'Mis Ingresos' }} />
            <Stack.Screen
                name="Gastos"
                component={GastosStack}
                options={{ title: 'Mis Gastos' }} />
            <Stack.Screen
                name="Ahorro"
                component={AhorroStack}
                options={{ title: 'Mi Ahorro' }} />
            <Stack.Screen
                name="Estadisticas"
                component={EstadisticasStack}
                options={{ title: 'Mis Estadisticas' }} />
        </Stack.Navigator>
    );
}