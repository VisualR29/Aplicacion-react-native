import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import IncomeStack from "./IncomeStack";
import ExpensesStack from "./ExpensesStack";
import SavingsStack from "./SavingsStack";
import StatisticsStack from "./StatisticsStack";
import AddButton from "../components/AddButton";

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
                options={{
                    title: 'Mis Ingresos',
                    headerRight: () => (
                        <AddButton link={'IncomeFormScreen'}/>
                    )
                }} />
            <Stack.Screen
                name="Gastos"
                component={ExpensesStack}
                options={{
                    title: 'Mis Gastos',
                    headerRight: () => (
                        <AddButton link={'ExpensesFormScreen'} />
                    ) }} />
            <Stack.Screen
                name="Ahorro"
                component={SavingsStack}
                options={{
                    title: 'Mi Ahorro',
                    headerRight: () => (
                        <AddButton link={'SavingsFormScreen'} />
                    ) }} />
            <Stack.Screen
                name="Estadisticas"
                component={StatisticsStack}
                options={{ title: 'Mis Estadisticas' }} />
        </Stack.Navigator>
    );
}