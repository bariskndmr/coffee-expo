import { create } from 'zustand';

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

export const useAppStore = create<AppState & AppActions>((set) => ({
    ...initialState,

    setIsOnboardingCompleted: (isOnboardingCompleted: boolean) => set({ isOnboardingCompleted }),

    reset: () => set(initialState)
}));
