import { PressableProps, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps extends PressableProps {
    title: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    loading?: boolean;
}