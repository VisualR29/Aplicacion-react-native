import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="ProfileScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="ProfileScreen"
                component={Profile} />
        </Stack.Navigator>
    );
}