import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ActivityBar from '../components/PageTopBars/ActivityBar';
import ScreenWrapper from '../components/ScreenWrapper';

export default function ActivityScreen() {
    return (
        <ScreenWrapper>
            <ScrollView
                stickyHeaderIndices={[0]}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                    <ActivityBar />

                {/* Activity feed */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                    <Text style={styles.item}>• Misty liked “Obsession”</Text>
                    <Text style={styles.item}>• Misty rated “Rainbow Rocks” ★★★★☆</Text>
                    <Text style={styles.item}>• Misty watched “Forbidden Fruits”</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>From Friends</Text>
                    <Text style={styles.item}>• Kaley reviewed “Dune 2” ★★★★★</Text>
                    <Text style={styles.item}>• Gael added “Drive” to Watchlist</Text>
                </View>

            </ScrollView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    item: {
        color: '#dfe4ea',
        fontSize: 15,
        marginBottom: 6,
    },
});
