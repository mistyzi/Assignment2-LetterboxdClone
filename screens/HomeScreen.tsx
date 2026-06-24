import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Popular This Week</Text>

            <View style={styles.placeholderRow}>
                <View style={styles.placeholderBox} />
                <View style={styles.placeholderBox} />
                <View style={styles.placeholderBox} />
            </View>

            <Text style={styles.sectionTitle}>New From Friends</Text>

            <View style={styles.placeholderRow}>
                <View style={styles.placeholderBox} />
                <View style={styles.placeholderBox} />
                <View style={styles.placeholderBox} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        paddingTop: 20,
        paddingHorizontal: 12,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
        marginTop: 20,
    },
    placeholderRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    placeholderBox: {
        width: 110,
        height: 160,
        backgroundColor: '#333',
        borderRadius: 8,
    },
});
