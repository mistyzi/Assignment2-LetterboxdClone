import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>

            {/* Header*/}
            <View style={styles.header}>
                <Ionicons name="settings-outline" size={27} color="#9aa0a6" />
                <Text style={styles.headerText}>misty</Text>
                <Ionicons name="ellipsis-horizontal-outline" size={32} color="#9aa0a6" />
            </View>

            {/* Tabs Row */}
            <View style={styles.tabsWrapper}>
                <View style={styles.tabsRow}>

                    {/* ACTIVE TAB */}
                    <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>
                        <Text style={styles.activeTabText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabItem}>
                        <Text style={styles.tabText}>Diary</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabItem}>
                        <Text style={styles.tabText}>Lists</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabItem}>
                        <Text style={styles.tabText}>Watchlist</Text>
                    </TouchableOpacity>

                </View>
            </View>


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

            </View>
        </ScrollView>
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
    },

    divider: {
        height: 1,
        backgroundColor: '#3a3f45',
        width: '100%',
        marginVertical: 16,
    },

    /* Header */
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 10,
    },

    headerText: {
        color: '#d6d6d6',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
        letterSpacing: 1.6,
    },

    /* Tabs */
    tabsWrapper: {
        backgroundColor: 'black',
        width: '100%',
        paddingBottom: 14,
        paddingHorizontal: 16,
    },

    tabsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1b1d1f',
        paddingHorizontal: 12,
        width: '100%',
        borderRadius: 10,
    },

    activeTab: {
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },

    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
    },

    activeTabItem: {
        backgroundColor: '#434a52',
        borderRadius: 10,
        marginLeft: -12,
    },

    activeTabText: {
        color: '#b0b4b8',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 1,
    },

    dividerTab: {
        height: 1,
        backgroundColor: '#3a3f45',
        width: '100%',
    },

    tabText: {
        color: '#9aa0a6',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1,
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

});



