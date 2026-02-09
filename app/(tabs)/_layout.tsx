import { Icon } from '@/src/shared/ui'
import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: "", tabBarIcon: () => <Icon icon="home" /> }} />
            <Tabs.Screen name="favorite" options={{ title: "", tabBarIcon: () => <Icon icon="heart" /> }} />
            <Tabs.Screen name="basket" options={{ title: "", tabBarIcon: () => <Icon icon="bag" /> }} />
            <Tabs.Screen name="notifications" options={{ title: "", tabBarIcon: () => <Icon icon="bell" /> }} />
        </Tabs>
    )
}

export default _layout