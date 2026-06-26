import ProfileTopBar from '@/components/PageTopBars/ProfileTopBar';
import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function ProfileScreen() {
    return (
        <ScreenWrapper>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }} >
                <View style={{ flex: 1 }}>
                    <ProfileTopBar />

                    <View style={styles.dividerTab} />

                    <View style={styles.content}>
                        {/* Profile Pic */}
                        <View style={styles.profileRow}>
                            <Image
                                source={require('../assets/pictures/pfp.jpg')}
                                style={styles.avatar}
                            />
                        </View>

                        {/* Favorites Section */}
                        <Text style={styles.sectionTitle}>FAVORITES</Text>

                        <View style={styles.favoritesRow}>
                            <Image
                                source={require('../assets/profileMovies/pearl.jpg')}
                                style={styles.favoritePoster}
                            />
                            <Image
                                source={require('../assets/profileMovies/words.jpg')}
                                style={styles.favoritePoster}
                            />
                            <Image
                                source={require('../assets/profileMovies/lisa.jpg')}
                                style={styles.favoritePoster}
                            />
                            <Image
                                source={require('../assets/profileMovies/eternal.jpg')}
                                style={styles.favoritePoster}
                            />
                        </View>
                        <View style={styles.divider} />

                        {/* Recent Activity */}
                        <Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>

                        <View style={styles.recentRow}>
                            <View style={styles.recentItem}>
                                <Image
                                    source={require('../assets/movies/movie1.jpg')}
                                    style={styles.recentPoster}
                                />
                                <Text style={styles.ratingText}>★★★★★</Text>
                            </View>

                            <View style={styles.recentItem}>
                                <Image
                                    source={require('../assets/profileMovies/rainbowrocks.jpg')}
                                    style={styles.recentPoster}
                                />
                                <Text style={styles.ratingText}>★★★★½</Text>
                            </View>

                            <View style={styles.recentItem}>
                                <Image
                                    source={require('../assets/profileMovies/equestriagirls.jpg')}
                                    style={styles.recentPoster}
                                />
                                <Text style={styles.ratingText}>★★★★★</Text>
                            </View>

                            <View style={styles.recentItem}>
                                <Image
                                    source={require('../assets/profileMovies/forbiddenfruits.jpg')}
                                    style={styles.recentPoster}
                                />
                                <Text style={styles.ratingText}>★★★★</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />

                        {/* More Activity Title */}
                        <View style={styles.moreActivityHeader}>
                            <Text style={styles.moreActivityText}>More activity</Text>
                            <Ionicons
                                name="chevron-forward"
                                size={18}
                                color="#7A7D80"
                                style={{ marginLeft: 6 }}
                            />
                        </View>
                        <View style={styles.divider} />

                        {/* Activity Graph */}
                        <View style={styles.graphContainer}>

                            {/* Left star */}
                            <Ionicons name="star" size={10} color="#4CAF50" style={{ marginRight: 6 }} />

                            {/* Bars */}
                            <View style={styles.barsRow}>
                                <View style={[styles.bar, { height: 5 }]} />
                                <View style={[styles.bar, { height: 15}]} />
                                <View style={[styles.bar, { height: 2 }]} />
                                <View style={[styles.bar, { height: 15 }]} />
                                <View style={[styles.bar, { height: 11 }]} />
                                <View style={[styles.bar, { height: 22 }]} />
                                <View style={[styles.bar, { height: 26 }]} />
                                <View style={[styles.bar, { height: 45 }]} />
                                <View style={[styles.bar, { height: 26 }]} />
                                <View style={[styles.bar, { height: 45 }]} />
                            </View>

                            {/* Right stars */}
                            <View style={styles.starGroup}>
                                <Ionicons name="star" size={10} color="#4CAF50" />
                                <Ionicons name="star" size={10} color="#4CAF50" />
                                <Ionicons name="star" size={10} color="#4CAF50" />
                                <Ionicons name="star" size={10} color="#4CAF50" />
                                <Ionicons name="star" size={10} color="#4CAF50" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.divider} />
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
const styles = StyleSheet.create({
    /* Page */
    container: {
        flex: 1,
        backgroundColor: '#1c2125',
    },

    content: {
        paddingHorizontal: 16,
        paddingBottom: 1
    },

    divider: {
        height: 1,
        backgroundColor: '#3a3f45',
        width: '100%',
        marginVertical: 16,
    },

    dividerTab: {
        height: 1,
        backgroundColor: '#3a3f45',
        width: '100%',
    },

    /* Profile Pic */
    profileRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginTop: 20,
        marginBottom: 20,
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    /* Movie Sections */
    sectionTitle: {
        color: '#9aa0a6',
        fontSize: 12,
        marginBottom: 10,
        marginLeft: 4,
        letterSpacing: 1.6
    },

    favoritesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 4,
    },

    favoritePoster: {
        width: 80,
        height: 120,
        borderRadius: 6,
    },

    recentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 4,
    },

    recentItem: {
        alignItems: 'flex-start',
    },

    recentPoster: {
        width: 80,
        height: 120,
        borderRadius: 6,
    },

    ratingText: {
        color: '#9aa0a6',
        fontSize: 15,
        marginTop: 3,
        letterSpacing: 1,
    },

    /* Activity Title */
    moreActivityHeader: {
        paddingHorizontal: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    moreActivityText: {
        color: '#9aa0a6',
        fontSize: 18,
    },

    /* Activity */
    graphContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 20,
        gap: 10,
    },

    barsRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 2,
    },

    bar: {
        width: 25,
        backgroundColor: '#2f3540',
    },

    starGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },

});