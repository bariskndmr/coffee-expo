import { colors } from '@/src/shared/theme';
import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { Typography } from '../typography';
import { styles } from './styles';
import { ButtonIconProps, ButtonProps, ButtonTextProps } from './type';

export const Button = ({ children, style, loading, disabled, ...rest }: ButtonProps) => {
    return (
        <Pressable
            style={[styles.container, disabled && styles.disabled, style]}
            disabled={disabled || loading}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator color={colors.surface.white.default} />
            ) : (
                children
            )}
        </Pressable>
    );
};

export const ButtonText = ({ children, style, ...rest }: ButtonTextProps) => {
    return (
        <Typography fontFamily="sora-semibold" style={[styles.text, style]} {...rest}>
            {children}
        </Typography>
    );
};

export const ButtonIcon = ({ children }: ButtonIconProps) => {
    return <>{children}</>;
};
