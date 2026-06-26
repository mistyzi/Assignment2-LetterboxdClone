import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MovieRow from '../components/MovieRow';
import TopBar from '../components/PageTopBars/TopBar';
import ScreenWrapper from '../components/ScreenWrapper';

export default function HomeScreen() {
    const popular = [
        { id: 1, poster: require('../assets/movies/movie4.jpg') },
        { id: 2, poster: require('../assets/movies/movie1.jpg') },
        { id: 3, poster: require('../assets/movies/movie3.jpg') },
        { id: 4, poster: require('../assets/movies/movie2.jpg') },
        { id: 5, poster: require('../assets/movies/movie5.jpg') },
        { id: 6, poster: require('../assets/movies/movie6.jpg') },
    ];

    const friends = [
        { id: 7, poster: require('../assets/movies/movie1.jpg'), user: "jark", rating: "★★★★½" },
        { id: 8, poster: require('../assets/movies/movie1.jpg'), user: "anaya", rating: "★★★★★" },
    ];

    const forYou = [
        { id: 9, poster: require('../assets/movies/foryou1.jpg') },
        { id: 10, poster: require('../assets/movies/foryou2.jpg') },
        { id: 11, poster: require('../assets/movies/foryou3.jpg') },
        { id: 12, poster: require('../assets/movies/foryou4.jpg') },
        { id: 13, poster: require('../assets/movies/foryou5.jpg') },
    ];

    return (
        <ScreenWrapper>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }} stickyHeaderIndices={[0]}>
                <TopBar />

                <MovieRow title="Popular This Week" data={popular} />
                <MovieRow title="New From Friends" data={friends} />
                <MovieRow title="Trending For You" data={forYou} />

                <TouchableOpacity style={styles.removeAdsContainer}>
                    <Text style={styles.removeAdsText}>Remove Ads</Text>
                </TouchableOpacity>
            </ScrollView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c2125',
    },

    removeAdsContainer: {
        marginTop: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: -10,
    },

    removeAdsText: {
        color: '#7A7D80',
        fontSize: 15,
        fontWeight: '600',
    },

});
