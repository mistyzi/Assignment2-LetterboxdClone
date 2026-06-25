import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function TopBar() {
    const [active, setActive] = useState('Films');

    const tabs = ['Films', 'Reviews', 'Lists', 'Journal'];

    return (
        <View style={styles.wrapper}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Letterboxd</Text>
            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setActive(tab)}>
                        <Text style={[styles.tab, active === tab && styles.activeTab]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
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

    titleContainer: {
        paddingTop: 12,
        paddingBottom: 6,
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700',
    },

    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 26,
        paddingVertical: 10,
    },

    tab: {
        color: '#7A7D80',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.3,
    },

    activeTab: {
        color: 'white',
    },
});
