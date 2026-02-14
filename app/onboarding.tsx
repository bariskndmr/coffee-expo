import { OnboardingSvg } from '@/assets/images';
import { Button, Typography, colors, useAppStore } from '@/src/shared';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = () => {
    const { width, height } = useWindowDimensions();
    const { setIsOnboardingCompleted } = useAppStore();
    const imageHeight = height * 0.6;

    const handleGetStarted = () => {
        router.replace('/(tabs)');
        setIsOnboardingCompleted(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <OnboardingSvg width={width} height={imageHeight} preserveAspectRatio="xMidYMin slice" />
                <LinearGradient
                    colors={['transparent', '#000']}
                    style={[StyleSheet.absoluteFill, { top: imageHeight * 0.9, height: imageHeight * 0.1 }]}
                />
            </View>
            <View style={styles.contentContainer}>
                <Typography variant="large" style={{ color: colors.surface.white.default, textAlign: 'center' }}>Fall in Love with Coffee in Blissful Delight!</Typography>
                <Typography variant="body" style={{ color: colors.grey.lighter, textAlign: 'center' }}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Typography>

                <Button onPress={handleGetStarted} title="Get Started" style={{ marginVertical: 24 }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    imageContainer: {
        overflow: 'hidden'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        gap: 12
    }
})

export default OnboardingScreen