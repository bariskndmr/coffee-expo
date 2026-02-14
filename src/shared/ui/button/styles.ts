import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brown.normal.default,
        paddingVertical: 16,
        width: '100%',
        borderRadius: 16,
        borderCurve: 'continuous',
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        color: colors.surface.white.default,
        fontSize: 16,
    },
});