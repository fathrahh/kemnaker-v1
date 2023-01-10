import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function SafeAreaStatusBar({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    paddingTop: StatusBar.currentHeight,
  },
});
