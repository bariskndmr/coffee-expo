import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';

const secureStorage: StateStorage = {
    getItem: (key) => SecureStore.getItemAsync(key),
    setItem: (key, value) => SecureStore.setItemAsync(key, value),
    removeItem: (key) => SecureStore.deleteItemAsync(key),
};

type AppState = {
    isOnboardingCompleted: boolean;
}

const initialState: AppState = {
    isOnboardingCompleted: false,
};

type AppActions = {
    setIsOnboardingCompleted: (isOnboardingCompleted: boolean) => void;
    reset: () => void;
}

export const useAppStore = create<AppState & AppActions>()(
    persist(
        (set) => ({
            ...initialState,

            setIsOnboardingCompleted: (isOnboardingCompleted: boolean) => set({ isOnboardingCompleted }),

            reset: () => set(initialState),
        }),
        {
            name: 'app-store',
            storage: createJSONStorage(() => secureStorage),
        }
    )
);
