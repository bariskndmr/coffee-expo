import { OnboardingSvg } from '@/assets/images';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = () => {
    const { width, height } = useWindowDimensions();
    const imageHeight = height * 0.6;

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
                <View style={{ overflow: 'hidden' }}>
                    <OnboardingSvg width={width} height={imageHeight} preserveAspectRatio="xMidYMin slice" />
                    <LinearGradient
                        colors={['transparent', '#000']}
                        style={[StyleSheet.absoluteFill, { top: imageHeight * 0.9, height: imageHeight * 0.1 }]}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "#fff" }}>Onboarding</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default OnboardingScreen