import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Savings from "../screens/Savings";

const Stack = createNativeStackNavigator();

export default function SavingsStack() {
    return (
        <Stack.Navigator
            initialRouteName="SavingsScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="SavingsScreen"
                component={Savings} />
        </Stack.Navigator>
    );
}