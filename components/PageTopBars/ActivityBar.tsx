import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ActivityTopBar() {
    const navigation = useNavigation();
    const [active, setActive] = useState('Friends');

    const tabs = ['Friends', 'You', 'Incoming'];

    return (
        <View style={styles.wrapper}>

            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Activity</Text>
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
    /* Page */
    wrapper: {
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#2A2F35',
    },

    /* Title */
    titleContainer: {
        paddingTop: 4,
        paddingBottom: 6,
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },

    /* Tabs */
    tabsOuter: {
        backgroundColor: 'black',
        paddingVertical: 10,
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
        height: 14,
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
