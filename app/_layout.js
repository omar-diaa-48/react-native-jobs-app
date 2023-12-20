import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';

SplashScreen.preventAutoHideAsync();

const useFontsHook = async () => {
    await Font.loadAsync({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
}

const Layout = () => {
    const [IsReady, SetIsReady] = useState(false);

    const onLayoutRootView = useCallback(async () => {
        if (!IsReady) {
            await useFontsHook();
            SetIsReady(true)
        }
    }, [IsReady])

    if (!IsReady) {
        return null
    }

    return (
        <Stack onLayout={onLayoutRootView}></Stack>
    )
}

export default Layout