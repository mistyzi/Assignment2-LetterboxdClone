import { StyleSheet, Text, View } from 'react-native';

export default function IncompleteScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coming Soon</Text>
            <Text style={styles.subtitle}>
                This page isn’t required for the project and hasn’t been completed yet.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c2125',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 10,
    },
    subtitle: {
        color: '#9aa0a6',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },
});
