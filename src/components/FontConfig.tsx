import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import fonts from "../constant/font";
SplashScreen.preventAutoHideAsync();

interface IFontConfig {
  children: React.ReactNode;
}

export default function FontConfig({ children }: IFontConfig) {
  const { Raleway, Roboto } = fonts;

  const [font] = useFonts({
    [Raleway.Regular]: require("src/assets/fonts/Raleway/static/Raleway-Regular.ttf"),
    [Raleway.Thin]: require("src/assets/fonts/Raleway/static/Raleway-Thin.ttf"),
    [Raleway.Black]: require("src/assets/fonts/Raleway/static/Raleway-Black.ttf"),
    [Raleway.Bold]: require("src/assets/fonts/Raleway/static/Raleway-Bold.ttf"),
    [Raleway.ExtraBold]: require("src/assets/fonts/Raleway/static/Raleway-ExtraBold.ttf"),
    [Raleway.ExtraLight]: require("src/assets/fonts/Raleway/static/Raleway-ExtraLight.ttf"),
    [Raleway.Italic]: require("src/assets/fonts/Raleway/static/Raleway-Italic.ttf"),
    [Raleway.Light]: require("src/assets/fonts/Raleway/static/Raleway-Light.ttf"),
    [Raleway.Medium]: require("src/assets/fonts/Raleway/static/Raleway-Medium.ttf"),
    [Roboto.Regular]: require("src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    [Roboto.Thin]: require("src/assets/fonts/Roboto/Roboto-Thin.ttf"),
    [Roboto.Medium]: require("src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    [Roboto.Black]: require("src/assets/fonts/Roboto/Roboto-Black.ttf"),
    [Roboto.Bold]: require("src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    [Roboto.Italic]: require("src/assets/fonts/Roboto/Roboto-Italic.ttf"),
    [Roboto.Light]: require("src/assets/fonts/Roboto/Roboto-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (font) {
      await SplashScreen.hideAsync();
    }
  }, [font]);

  if (!font) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
