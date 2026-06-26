import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenWrapperProps = {
    children: React.ReactNode;
};

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </SafeAreaView>
    );
}