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
    [Raleway.Bold]: require("src/assets/fonts/Raleway/static/Raleway-Bold.ttf"),
    [Roboto.Regular]: require("src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    [Roboto.Bold]: require("src/assets/fonts/Roboto/Roboto-Bold.ttf"),
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
