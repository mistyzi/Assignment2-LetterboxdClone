import SearchScreen from '@/screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import ActivityScreen from '../screens/ActivityScreen';
import HomeScreen from '../screens/HomeScreen';
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
                    tabBarIcon: ({ color, size }) => {
                        const icons = {
                            Home: 'albums-sharp',
                            Search: 'search',
                            Create: 'add-circle-outline',
                            Activity: 'flash',
                            Profile: 'person',
                        } as const;

                        return (
                            <Ionicons
                                name={icons[route.name as keyof typeof icons]}
                                size={25}
                                color={color}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Create" component={HomeScreen} />
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
        height: 80,
        backgroundColor: '#434a52',
        borderTopWidth: 1,
        borderTopColor: '#2A2F35',
        paddingBottom: 10,
        paddingTop: 10,
    },
});
