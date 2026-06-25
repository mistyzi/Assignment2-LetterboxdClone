import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function SearchScreen() {
    const browseItems = [
        'Release date',
        'Genre, country or language',
        'Service',
        'Letterboxd Video Store',
        'Most popular',
        'Highest rated',
        'Most anticipated',
        'Top 500 narrative features',
        'Featured lists',
        'Official lists',
    ];

    return (
        <ScreenWrapper>
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 120 }} 
            stickyHeaderIndices={[0]}
        >
            {/* Black Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Search</Text>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={18} color="#7A7D80" style={styles.searchIcon} />

                    <TextInput
                        placeholder="Find films, cast + crew, members, reviews…"
                        placeholderTextColor="#7A7D80"
                        style={styles.searchInput}
                    />
                </View>
                

            </View>

            {/* Browse By */}
            <Text style={styles.sectionTitle}>Browse by</Text>

            <View style={styles.listContainer}>
                {browseItems.map((item, index) => (
                    <View key={index}>
                        <TouchableOpacity style={styles.listItem}>
                            <Text style={styles.listText}>{item}</Text>

                            {/* Right-side icon */}
                            <Ionicons name="chevron-forward" size={18} color="#9aa0a6" />
                        </TouchableOpacity>

                        {/* Divider */}
                        <View style={styles.divider} />
                    </View>
                ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerHeader}>Letterboxd.com</Text>
                {/* New here? */}
                <View>
                    <TouchableOpacity style={styles.listItem}>
                        <Text style={styles.listText}>New here?</Text>
                        <Ionicons name="chevron-forward" size={18} color="#9aa0a6" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                </View>

                {/* Frequent questions */}
                <View>
                    <TouchableOpacity style={styles.listItem}>
                        <Text style={styles.listText}>Frequent questions</Text>
                        <Ionicons name="chevron-forward" size={18} color="#9aa0a6" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                </View>
            </View>

        </ScrollView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c2125',
        height: 60,
    },

    headerContainer: {
        backgroundColor: 'black',
        paddingTop: 5,
        paddingBottom: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },

    header: {
        color: '#d3cdcd',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
        textAlign: 'center',
    },

    searchBar: {
        backgroundColor: '#434a52',
        width: '100%',
        height: 40,
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    searchIcon: {
        marginRight: 6,
    },

    searchInput: {
        color: 'white',
        fontSize: 16,
        flex: 1,
    },

    sectionTitle: {
        color: '#d3cdcd',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 28,
        marginBottom: 6,
        paddingHorizontal: 16,
    },

    listContainer: {
        paddingHorizontal: 16,
    },

    listItem: {
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    listText: {
        color: '#9aa0a6',
        fontSize: 16,
    },

    divider: {
        height: 1,
        backgroundColor: '#3a3f45',
        width: '100%',
    },

    footer: {
        marginTop: 40,
        marginBottom: 5,
        paddingHorizontal: 16,
    },

    footerHeader: {
        color: '#d3cdcd',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 1,
    },

    footerLink: {
        color: '#9aa0a6',
        fontSize: 15,
    },
    footerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 1,
    },

});

