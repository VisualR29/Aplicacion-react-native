import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Income from "../screens/income/Income";
import { IncomeForm } from "../screens/income/IncomeForm"

const Stack = createNativeStackNavigator();

export default function IncomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="IncomeScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="IncomeScreen"
                component={Income} />
            <Stack.Screen
                name="IncomeFormScreen"
                component={IncomeForm} />
        </Stack.Navigator>
    );
}