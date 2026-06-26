import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#111',
                    borderTopWidth: 0,
                    height: 70,
                },
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        Home: 'home',
                        Search: 'search',
                        Create: 'add-circle',
                        Activity: 'flash',
                        Profile: 'person',
                    } as const;

                    const iconName = icons[route.name as keyof typeof icons];

                    return (
                        <Ionicons
                            name={iconName}
                            size={28}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: '#00E054',
                tabBarInactiveTintColor: '#666',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#46505c',
        borderTopWidth: 1,
        borderTopColor: '#2A2F35',
        paddingBottom: 15,
        paddingTop: 5,
    },
});
