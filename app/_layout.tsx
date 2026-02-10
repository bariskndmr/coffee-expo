import { AppProviders } from '@/src/core';
import { useAppStore } from '@/src/shared';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
    const [isLoaded] = useFonts({
        'sora-light': require('@/assets/fonts/Sora-Light.ttf'),
        'sora-regular': require('@/assets/fonts/Sora-Regular.ttf'),
        'sora-medium': require('@/assets/fonts/Sora-Medium.ttf'),
        'sora-semibold': require('@/assets/fonts/Sora-SemiBold.ttf'),
        'sora-bold': require('@/assets/fonts/Sora-Bold.ttf'),
    });
    const { isOnboardingCompleted } = useAppStore();


    if (!isLoaded) return null;

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
