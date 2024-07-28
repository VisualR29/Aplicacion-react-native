import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SavingForm }  from "../screens/saving/SavingForm";
import Savings from "../screens/saving/Savings";

const Stack = createNativeStackNavigator();

export default function SavingsStack() {
    return (
        <Stack.Navigator
            initialRouteName="SavingsScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="SavingsScreen"
                component={Savings} />
            <Stack.Screen
                name="SavingsFormScreen"
                component={SavingForm} />
        </Stack.Navigator>
    );
}