import { colors } from '@/src/shared/theme';
import { Icon } from '@/src/shared/ui';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

type TTabBarIconProps = {
    name: string;
    focused: boolean;
    color: string;
}

const TabBarIcon = ({ name, focused, color }: TTabBarIconProps) => {
    return (
        <View style={{ alignItems: 'center', gap: 4 }}>
            <Icon icon={name} color={color} />
            <View style={{ width: 10, height: 5, backgroundColor: focused ? colors.brown.normal.default : 'transparent', borderRadius: 18 }} />
        </View>
    )
}

const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.brown.normal.default,
            tabBarInactiveTintColor: colors.grey.lighter
        }}>
            <Tabs.Screen name="index" options={{ title: "", tabBarIcon: (props) => <TabBarIcon name="home" {...props} /> }} />
            <Tabs.Screen name="favorite" options={{ title: "", tabBarIcon: (props) => <TabBarIcon name="heart" {...props} /> }} />
            <Tabs.Screen name="basket" options={{ title: "", tabBarIcon: (props) => <TabBarIcon name="bag" {...props} /> }} />
            <Tabs.Screen name="notifications" options={{ title: "", tabBarIcon: (props) => <TabBarIcon name="bell" {...props} /> }} />
        </Tabs>
    )
}

export default _layout