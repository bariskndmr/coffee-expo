import { AppProviders } from '@/src/core';
import { useAppStore } from '@/src/shared';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [isLoaded, error] = useFonts({
        'sora-light': require('@/assets/fonts/Sora-Light.ttf'),
        'sora-regular': require('@/assets/fonts/Sora-Regular.ttf'),
        'sora-medium': require('@/assets/fonts/Sora-Medium.ttf'),
        'sora-semibold': require('@/assets/fonts/Sora-SemiBold.ttf'),
        'sora-bold': require('@/assets/fonts/Sora-Bold.ttf'),
    });
    const { isOnboardingCompleted } = useAppStore();

    useEffect(() => {
        if (isLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [isLoaded, error]);

    if (!isLoaded && !error) return null;

    return (
        <AppProviders>
            <Stack>
                <Stack.Screen name='onboarding' options={{ headerShown: false }} />
                <Stack.Protected guard={isOnboardingCompleted}>
                    <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                </Stack.Protected>
            </Stack>
        </AppProviders>
    );
}
