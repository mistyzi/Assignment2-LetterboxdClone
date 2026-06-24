import { FlatList, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

type MovieRowProps = {
    title: string;
    data: { id: number; poster: ImageSourcePropType }[];
};

export default function MovieRow({ title, data }: MovieRowProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MoviePoster poster={item.poster} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
});
