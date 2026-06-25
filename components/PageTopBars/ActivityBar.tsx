import { StyleSheet, Text, View } from 'react-native';

export default function ActivityTopBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Activity</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#14181C',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#2A2F35',
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700',
    },
});
