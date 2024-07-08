import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import SavingsStack from "./SavingsStack";
import IncomeStack from "./IncomeStack";
import ExpensesStack from "./ExpensesStack";
import StatisticsStack from "./StatisticsStack";

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
                component={IncomeStack}
                options={{ title: 'Mis Ingresos' }} />
            <Stack.Screen
                name="Gastos"
                component={ExpensesStack}
                options={{ title: 'Mis Gastos' }} />
            <Stack.Screen
                name="Ahorro"
                component={SavingsStack}
                options={{ title: 'Mi Ahorro' }} />
            <Stack.Screen
                name="Estadisticas"
                component={StatisticsStack}
                options={{ title: 'Mis Estadisticas' }} />
        </Stack.Navigator>
    );
}