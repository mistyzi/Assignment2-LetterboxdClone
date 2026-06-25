import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>

            {/* Header*/}
            <View style={styles.header}>
                <View style={{ width: 24 }} />
                <Text style={styles.headerText}>misty</Text>
                <Ionicons name="settings-outline" size={24} color="white" />
            </View>

            {/* Tabs Row */}
            <View style={styles.tabsRow}>
                <TouchableOpacity>
                    <Text style={[styles.tabText, styles.activeTab]}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.tabText}>Diary</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.tabText}>Lists</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.tabText}>Watchlist</Text>
                </TouchableOpacity>
            </View>

            {/* Profile Pic */}
            <View style={styles.profileRow}>
                <Image
                    source={require('../assets/pictures/pfp.jpg')}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.divider} />

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

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c2125',
        paddingHorizontal: 16,
    },

    divider: {
        height: 1,
        backgroundColor: '#3a3f45',
        width: '100%',
        marginVertical: 16,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    headerText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
    },

    tabsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },

    tabText: {
        color: '#9aa0a6',
        fontSize: 16,
        fontWeight: '600',
    },

    activeTab: {
        color: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingBottom: 4,
    },


    profileRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginBottom: 10,
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    sectionTitle: {
        color: '#9aa0a6', 
        fontSize: 15,     
        marginBottom: 8,    
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
        height: 140,
        borderRadius: 6,
    },



});



