import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActivityTopBar from '../components/PageTopBars/ActivityBar';

export default function ActivityScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.content}
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}
            >
                {/* Sticky Header */}
                <View style={styles.headerWrapper}>
                    <ActivityTopBar />
                </View>

                {/* Activity Feed */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>

                    {/* Activity Cards */}
                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="heart" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>anaya liked “Obsession”</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="star" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>misty rated “Rainbow Rocks” ★★★★½</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="play" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>misty watched “Forbidden Fruits”</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="play" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>pawsp7 watched “Toy Story 5”</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="star" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>cochon6597 rated “Backrooms” ★★★</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="heart" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>junklorde liked “Tangled”</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="person-add-sharp" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>pawsp7 followed you</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="person-add-sharp" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>jark followed you</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="heart" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>misty liked “Legally Blonde”</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="star" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>junklorde rated “Lisa Frankenstein” ★★★★★</Text>
                        </View>
                    </View>

                    <View style={styles.activityCard}>
                        <View style={styles.item}>
                            <Ionicons name="play" size={18} color="#4CAF50" />
                            <Text style={styles.itemText}>anaya watched “Juno”</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    /* Page */
    safeArea: {
        flex: 1,
        backgroundColor: '#000000',
    },
    scroll: {
        flex: 1,
        backgroundColor: '#14181C',
    },
    content: {
        paddingBottom: 40,
        backgroundColor: '#14181C',
    },
    headerWrapper: {
        backgroundColor: '#14181C',
    },

    /* Section */
    section: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: '#14181C',
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },

    /* Activity Card */
    activityCard: {
        backgroundColor: '#434a52',
        padding: 14,
        borderRadius: 8,
        marginBottom: 12,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    itemText: {
        color: '#dfe4ea',
        fontSize: 15,
    },
});
