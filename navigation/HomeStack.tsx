import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </Stack.Navigator>
    );
}
