import { Ionicons } from '@expo/vector-icons';
import { FlatList, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

type MovieRowProps = {
    title: string;
    data: { id: number; poster: ImageSourcePropType; user?: string; rating?: string }[];
};

export default function MovieRow({ title, data }: MovieRowProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="chevron-forward" size={18} color="#7A7D80" />
            </View>

            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MoviePoster poster={item.poster} user={item.user} rating={item.rating} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 11,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
},
});