import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MovieDetailsScreen({ route }: { route: RouteProp<any, any> }) {
    const navigation = useNavigation();
    const { poster, user, rating } = route.params ?? {};

    return (
        <SafeAreaView style={styles.safeArea}>

            {/* Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>

                {/* Poster */}
                <Image source={poster} style={styles.poster} />

                {/* Title Section */}
                <Text style={styles.title}>Movie Name</Text>
                <Text style={styles.subInfo}>2026 • Directed by Director Name</Text>

                {/* Trailer Button */}
                <TouchableOpacity style={styles.trailerButton}>
                    <Ionicons name="play" size={18} color="white" />
                    <Text style={styles.trailerText}>Trailer</Text>
                </TouchableOpacity>

                {/* Runtime */}
                <Text style={styles.runtime}>100 mins</Text>

                {/* Description */}
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed aliquam mauris. Vivamus mi libero, pulvinar bibendum tortor ullamcorper, interdum fringilla odio. Nunc fermentum neque ac volutpat tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>

                {/* Ratings Section */}
                <View style={styles.ratingBox}>
                    <Text style={styles.ratingNumber}>5.0</Text>
                    <Text style={styles.ratingLabel}>Average Rating</Text>
                </View>

                {/* User + Rating (from your poster component) */}
                {user && <Text style={styles.user}>Logged by {user}</Text>}
                {rating && <Text style={styles.userRating}>Rating: {rating}</Text>}

                {/* Action Buttons */}
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionBtn}>
                        <Ionicons name="star-outline" size={22} color="white" />
                        <Text style={styles.actionText}>Rate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionBtn}>
                        <Ionicons name="time-outline" size={22} color="white" />
                        <Text style={styles.actionText}>Log</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionBtn}>
                        <Ionicons name="create-outline" size={22} color="white" />
                        <Text style={styles.actionText}>Review</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionBtn}>
                        <Ionicons name="add-outline" size={22} color="white" />
                        <Text style={styles.actionText}>List</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    /* Page */
    safeArea: {
        flex: 1,
        backgroundColor: '#14181C',
    },
    header: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: '#14181C',
    },
    scroll: {
        flex: 1,
        backgroundColor: '#14181C',
    },
    content: {
        padding: 20,
        backgroundColor: '#14181C',
        paddingBottom: 60,
    },

    /* Movie */
    poster: {
        width: '100%',
        height: 400,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 4,
    },
    subInfo: {
        color: '#b0b4b8',
        fontSize: 14,
        marginBottom: 16,
    },
    /* Trailer */
    trailerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#232a31',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 6,
        width: 110,
        marginBottom: 12,
    },
    trailerText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 14,
    },

    /* Info */
    runtime: {
        color: '#b0b4b8',
        fontSize: 14,
        marginBottom: 16,
    },
    description: {
        color: '#dfe4ea',
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 20,
    },
    ratingBox: {
        backgroundColor: '#232a31',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    ratingNumber: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
    },
    ratingLabel: {
        color: '#b0b4b8',
        fontSize: 14,
        marginTop: 4,
    },
    user: {
        color: 'white',
        fontSize: 16,
        marginBottom: 4,
    },
    userRating: {
        color: '#07c517',
        fontSize: 16,
        marginBottom: 20,
    },

    /* Actions */
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionBtn: {
        alignItems: 'center',
        width: 70,
    },
    actionText: {
        color: 'white',
        fontSize: 12,
        marginTop: 4,
    },
});
