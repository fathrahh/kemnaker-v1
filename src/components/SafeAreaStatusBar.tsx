import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ViewStyle,
  StyleProp,
} from "react-native";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function SafeAreaStatusBar({ style, children }: Props) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
  },
});
