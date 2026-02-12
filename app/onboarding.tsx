import { OnboardingSvg } from '@/assets/images';
import { colors } from '@/src/shared';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
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
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 24, gap: 12 }}>
                    <Text style={{ color: colors.surface.white.default, lineHeight: 50, fontFamily: "sora-semibold", fontSize: 32, textAlign: 'center' }}>Fall in Love with Coffee in Blissful Delight!</Text>
                    <Text style={{ color: colors.grey.lighter, fontFamily: "sora-regular", fontSize: 14, textAlign: 'center' }}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>

                    <TouchableOpacity style={{
                        backgroundColor: colors.brown.normal.default,
                        paddingVertical: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 24,
                    }}>
                        <Text style={{ color: colors.surface.white.default, fontFamily: "sora-semibold", fontSize: 16 }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </>
    )
}

export default OnboardingScreen