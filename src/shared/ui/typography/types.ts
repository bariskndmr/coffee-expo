import { StyleProp, TextProps, TextStyle } from 'react-native';
import { colors } from '../../theme';

export type FontFamily = 'sora-light' | 'sora-regular' | 'sora-semibold' | 'sora-bold';

export type Variant = 'caption' | 'small' | 'body' | 'label' | 'heading' | 'large';

const defaultColor = colors.grey.normal.default;

export const variantStyles: Record<Variant, TextStyle> = {
    caption: { fontFamily: 'sora-light', fontSize: 12, color: defaultColor },
    small: { fontFamily: 'sora-regular', fontSize: 12, color: defaultColor },
    body: { fontFamily: 'sora-regular', fontSize: 14, color: defaultColor },
    label: { fontFamily: 'sora-semibold', fontSize: 16, color: defaultColor },
    heading: { fontFamily: 'sora-bold', fontSize: 20, color: defaultColor },
    large: { fontFamily: 'sora-semibold', fontSize: 32, color: defaultColor },
};

export interface TypographyProps extends TextProps {
    variant?: Variant;
    fontFamily?: FontFamily;
    style?: StyleProp<TextStyle>;
}
