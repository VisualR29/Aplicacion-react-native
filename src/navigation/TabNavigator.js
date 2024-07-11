import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../global/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MainStack from './MainStack';
import ProfileStack from './ProfileStack';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={MainStack}
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome name="home" size={24} color={focused ? "black" : colors.gray} />
                            </View>
                        );
                    }
                }} />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    title: 'Mi Perfil',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <AntDesign name="smile-circle" size={24} color={focused ? "black" : colors.gray
                                } />
                            </View>
                        );
                    }
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        height: 60
    }
})