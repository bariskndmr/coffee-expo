import { PressableProps, StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';

export interface ButtonProps extends PressableProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    loading?: boolean;
}

export interface ButtonTextProps extends TextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

export interface ButtonIconProps {
    children: React.ReactNode;
}
