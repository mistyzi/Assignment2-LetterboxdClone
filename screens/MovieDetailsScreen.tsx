import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HomeStackParamList } from '../navigation/types';

type MovieDetailsScreenProps = NativeStackScreenProps<
    HomeStackParamList,
    'MovieDetails'
>;

export default function MovieDetailsScreen({ route }: MovieDetailsScreenProps) {
    const { poster, user, rating } = route.params;

    return (
        <ScrollView style={styles.container}>
            
            {/* Poster */}
            <Image source={poster} style={styles.poster} />

            {/* Info */}
            <View style={styles.infoSection}>
                <Text style={styles.title}>Movie Title</Text>

                {rating && (
                    <Text style={styles.rating}>Rating: {rating}</Text>
                )}

                {user && (
                    <Text style={styles.user}>Watched by {user}</Text>
                )}

                <Text style={styles.description}>
                    This is a placeholder description for the movie. 
                    You can replace this with real data later or keep it simple 
                    for your assignment.
                </Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    poster: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
    },

    infoSection: {
        padding: 16,
    },

    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 10,
    },

    rating: {
        color: '#00E054',
        fontSize: 18,
        marginBottom: 6,
    },

    user: {
        color: '#7A7D80',
        fontSize: 16,
        marginBottom: 16,
    },

    description: {
        color: '#b0b4b8',
        fontSize: 16,
        lineHeight: 22,
    },
});
