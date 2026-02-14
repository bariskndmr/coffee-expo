import { colors } from '@/src/shared/theme';
import { Icon } from '@/src/shared/ui';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type TTabBarIconProps = {
    name: string;
    focused: boolean;
    color: string;
};

const TabBarIcon = ({ name, focused, color }: TTabBarIconProps) => {
    return (
        <View style={tabStyles.iconContainer}>
            <Icon icon={name} color={color} />
            <View
                style={[
                    tabStyles.indicator,
                    focused && tabStyles.indicatorActive,
                ]}
            />
        </View>
    );
};

const HomeIcon = (props: { focused: boolean; color: string }) => (
    <TabBarIcon name="home" {...props} />
);
const FavoriteIcon = (props: { focused: boolean; color: string }) => (
    <TabBarIcon name="heart" {...props} />
);
const BasketIcon = (props: { focused: boolean; color: string }) => (
    <TabBarIcon name="bag" {...props} />
);
const NotificationsIcon = (props: { focused: boolean; color: string }) => (
    <TabBarIcon name="bell" {...props} />
);

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.brown.normal.default,
                tabBarInactiveTintColor: colors.grey.lighter.default,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{ title: '', tabBarIcon: HomeIcon }}
            />
            <Tabs.Screen
                name="favorite"
                options={{ title: '', tabBarIcon: FavoriteIcon }}
            />
            <Tabs.Screen
                name="basket"
                options={{ title: '', tabBarIcon: BasketIcon }}
            />
            <Tabs.Screen
                name="notifications"
                options={{ title: '', tabBarIcon: NotificationsIcon }}
            />
        </Tabs>
    );
};

const tabStyles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        gap: 4,
    },
    indicator: {
        width: 10,
        height: 5,
        backgroundColor: 'transparent',
        borderRadius: 18,
        borderCurve: 'continuous',
    },
    indicatorActive: {
        backgroundColor: colors.brown.normal.default,
    },
});

export default _layout;
