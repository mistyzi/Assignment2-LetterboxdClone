import { createStackNavigator } from '@react-navigation/stack';
import MovieDetailsScreen from '../pages/DetailScreen';
import HomeScreen from '../pages/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MovieDetails"
                component={MovieDetailsScreen}
                options={{ title: 'Movie Details' }}
            />
        </Stack.Navigator>
    );
}