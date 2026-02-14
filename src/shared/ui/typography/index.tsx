import React from 'react';
import { Text } from 'react-native';
import { TypographyProps, variantStyles } from './types';


export const Typography = ({
    variant = 'body',
    fontFamily,
    style,
    children,
    ...rest
}: TypographyProps) => {
    return (
        <Text
            style={[
                variantStyles[variant],
                fontFamily && { fontFamily },
                style,
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
};
