import type { RootStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

type MoviePosterProps = {
    poster: any;
    user?: string;
    rating?: string;
};

export default function MoviePoster({ poster, user, rating }: MoviePosterProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                (navigation as any).navigate('MovieDetails', {
                    poster,
                    user,
                    rating,
                })
            }
        >
            <Image source={poster} style={styles.poster} />

            {user && <Text style={styles.user}>{user}</Text>}
            {rating && <Text style={styles.rating}>{rating}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    },
    poster: {
        width: 110,
        height: 165,
        borderRadius: 6,
    },
    user: {
        color: 'white',
        marginTop: 4,
        fontSize: 12,
    },
    rating: {
        color: '#5f5f5f',
        fontSize: 12,
    },
});
