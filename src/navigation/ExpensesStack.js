import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExpensesForm } from "../screens/expenses/ExpensesForm";
import Expenses from "../screens/expenses/Expenses";

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
            <Stack.Screen
                name="ExpensesFormScreen"
                component={ExpensesForm}/>
        </Stack.Navigator>
    );
}