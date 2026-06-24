import { ScrollView, StyleSheet } from 'react-native';
import MovieRow from '../components/MovieRow';
import TopBar from '../components/TopBar';

const movie1 = require('../assets/movies/movie1.jpg');
const movie2 = require('../assets/movies/movie2.jpg');
const movie3 = require('../assets/movies/movie3.jpg');
const movie4 = require('../assets/movies/movie4.jpg');

export default function HomeScreen() {
    const popular = [
        { id: 1, poster: require('../assets/movies/movie4.jpg') },
        { id: 2, poster: require('../assets/movies/movie1.jpg') },
        { id: 3, poster: require('../assets/movies/movie3.jpg') },
        { id: 4, poster: require('../assets/movies/movie2.jpg') },
    ];

    const friends = [
        { id: 5, poster: require('../assets/movies/movie1.jpg'), user: "jark", rating: "★★★★½" },
        { id: 6, poster: require('../assets/movies/movie1.jpg'), user: "anaya", rating: "★★★★★"},
    ];

    const forYou = [
        { id: 7, poster: require('../assets/movies/foryou1.jpg') },
        { id: 8, poster: require('../assets/movies/foryou2.jpg') },
        { id: 9, poster: require('../assets/movies/foryou3.jpg') },
    ];

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }} >
            <TopBar />

            <MovieRow title="Popular This Week" data={popular} />
            <MovieRow title="New From Friends" data={friends} />
            <MovieRow title="Trending For You" data={forYou} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c2125',
    },
});
