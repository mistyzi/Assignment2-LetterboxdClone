import SearchScreen from '@/screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import ActivityScreen from '../screens/ActivityScreen';
import HomeScreen from '../screens/HomeScreen';
import IncompleteScreen from '../screens/IncompleteScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                    tabBarShowLabel: false,

                    tabBarActiveTintColor: '#03b8ff',
                    tabBarInactiveTintColor: '#7A7D80',

                    tabBarIcon: ({ color, focused }) => {
                        const icons = {
                            Home: focused ? 'albums' : 'albums-outline',
                            Search: focused ? 'search' : 'search-outline',
                            Create: focused ? 'add-circle' : 'add-circle-outline',
                            Activity: focused ? 'flash' : 'flash-outline',
                            Profile: focused ? 'person' : 'person-outline',
                        } as const;

                        const isCreate = route.name === 'Create';
                        const iconColor = isCreate ? '#00E054' : color;

                        return (
                            <Ionicons
                                name={icons[route.name as keyof typeof icons]}
                                size={30}
                                color={iconColor}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Create" component={IncompleteScreen} />
                <Tab.Screen name="Activity" component={ActivityScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </View>
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