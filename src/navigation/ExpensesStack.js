import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Expenses from "../screens/Expenses";

const Stack = createNativeStackNavigator();

export default function ExpensesStack(){
    return (
        <Stack.Navigator
            initialRouteName="ExpensesScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="ExpensesScreen"
                component={Expenses} />
        </Stack.Navigator>
    );
}