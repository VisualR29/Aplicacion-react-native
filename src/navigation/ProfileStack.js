import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

export default function ProfileStack () {
    return (
        <Stack.Navigator
            initialRouteName="ProfileScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="ProfileScreen"
                component={Profile} />
            <Stack.Screen
                name="ImageSelector"
                component={ImageSelector} />

            {/* <Stack.Screen name="My Profile" component={MyProfile} />
            <Stack.Screen name="Image Selector" component={ImageSelector} />
            <Stack.Screen name="List Address" component={ListAddress} />
            <Stack.Screen name="Location Selector" component={LocationSelector} /> */}
        </Stack.Navigator>
    );
}