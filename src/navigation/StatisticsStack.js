import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Statistics from "../screens/Statistics";

const Stack = createNativeStackNavigator();

export default function StatisticsStack() {
    return (
        <Stack.Navigator
            initialRouteName="StatisticsScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="StatisticsScreen"
                component={Statistics} />
        </Stack.Navigator>
    );
}