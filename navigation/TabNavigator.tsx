import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,     // hides the top header (Letterboxd style)
                tabBarStyle: {
                    backgroundColor: '#000',   // dark theme
                    borderTopColor: '#222',
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#888',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
            />
            <Tab.Screen
                name="Activity"
                component={ActivityScreen}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
}
