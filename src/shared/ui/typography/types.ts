import { StyleProp, TextProps, TextStyle } from "react-native";

export type FontFamily = 'sora-light' | 'sora-regular' | 'sora-semibold' | 'sora-bold';

export type Variant = 'caption' | 'small' | 'body' | 'label' | 'heading' | 'large';

export const variantStyles: Record<Variant, TextStyle> = {
    caption: { fontFamily: 'sora-light', fontSize: 12 },
    small: { fontFamily: 'sora-regular', fontSize: 12 },
    body: { fontFamily: 'sora-regular', fontSize: 14 },
    label: { fontFamily: 'sora-semibold', fontSize: 16 },
    heading: { fontFamily: 'sora-bold', fontSize: 20 },
    large: { fontFamily: 'sora-semibold', fontSize: 32 },
};

export interface TypographyProps extends TextProps {
    variant?: Variant;
    fontFamily?: FontFamily;
    style?: StyleProp<TextStyle>;
}