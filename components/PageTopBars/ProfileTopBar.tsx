import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileTopBar() {
    const [active, setActive] = useState('Profile');

    const tabs = ['Profile', 'Diary', 'Lists', 'Watchlist'];

    return (
        <View style={styles.wrapper}>

            {/* Header Row */}
            <View style={styles.header}>
                <Ionicons name="settings-outline" size={26} color="#9aa0a6" />
                <Text style={styles.headerText}>misty</Text>
                <Ionicons name="ellipsis-horizontal-outline" size={28} color="#9aa0a6" />
            </View>

            {/* Tabs */}
            <View style={styles.tabsOuter}>
                <View style={styles.tabsInner}>
                    {tabs.map((tab, index) => (
                        <View key={tab} style={styles.tabWrapper}>
                            <TouchableOpacity
                                onPress={() => setActive(tab)}
                                style={[styles.tab, active === tab && styles.activeTab]}
                            >
                                <Text style={[styles.label, active === tab && styles.activeLabel]}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>

                            {index < tabs.length - 1 && <View style={styles.divider} />}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#2A2F35',
    },

    /* Header Row */
    header: {
        paddingTop: 12,
        paddingBottom: 2,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700',
    },

    /* Tabs */
    tabsOuter: {
        backgroundColor: 'black',
        paddingVertical: 15,
    },

    tabsInner: {
        backgroundColor: '#1A1A1A',
        marginHorizontal: 16,
        borderRadius: 7,
        flexDirection: 'row',
        overflow: 'hidden',
    },

    tabWrapper: {
        flexDirection: 'row',
        flex: 1,
    },

    divider: {
        width: 1,
        height: '55%',
        alignSelf: 'center',
        backgroundColor: '#2A2F35',
    },

    tab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
    },

    label: {
        color: '#7A7D80',
        fontSize: 14,
        fontWeight: '600',
    },

    activeTab: {
        borderRadius: 7,
        backgroundColor: '#434a52',
    },

    activeLabel: {
        color: '#b0b4b8',
        fontWeight: '700',
    },
});