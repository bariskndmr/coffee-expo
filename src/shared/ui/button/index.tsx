import { colors } from '@/src/shared/theme';
import React from 'react';
import {
    ActivityIndicator,
    Pressable,
} from 'react-native';
import { Typography } from '../typography';
import { styles } from './styles';
import { ButtonProps } from './type';



export const Button = ({ title, style, textStyle, loading, disabled, ...rest }: ButtonProps) => {
    return (
        <Pressable
            style={[styles.container, disabled && styles.disabled, style]}
            disabled={disabled || loading}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator color={colors.surface.white.default} />
            ) : (
                <Typography fontFamily="sora-semibold" style={[styles.text, textStyle]}>
                    {title}
                </Typography>
            )}
        </Pressable>
    );
};


