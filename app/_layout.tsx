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

    if (!isLoaded) return null;

    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
    );
}
