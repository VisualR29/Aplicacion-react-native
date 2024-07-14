import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Savings from "../screens/saving/Savings";
import { SavingForm }  from "../screens/saving/SavingForm";

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