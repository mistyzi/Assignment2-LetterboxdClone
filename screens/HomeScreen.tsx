import { ScrollView, StyleSheet } from 'react-native';
import MovieRow from '../components/MovieRow.tsx';
import TopBar from '../components/TopBar';

// LOCAL IMAGES — make sure these exist
import movie1 from '../assets/movies/movie1.jpg';
import movie2 from '../assets/movies/movie2.jpg';
import movie3 from '../assets/movies/movie3.jpg';

export default function HomeScreen() {
    const popular = [
        { id: 1, poster: movie1 },
        { id: 2, poster: movie2 },
        { id: 3, poster: movie3 },
    ];

    const friends = [
        { id: 4, poster: movie2 },
        { id: 5, poster: movie1 },
        { id: 6, poster: movie3 },
    ];

    return (
        <ScrollView style={styles.container}>
            <TopBar />

            <MovieRow title="Popular This Week" data={popular} />
            <MovieRow title="New From Friends" data={friends} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c2125',
        paddingHorizontal: 12,
    },
});
