import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Income from "../screens/Income";

const Stack = createNativeStackNavigator();

export default function IncomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="IncomeScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="IncomeScreen"
                component={Income} />
        </Stack.Navigator>
    );
}