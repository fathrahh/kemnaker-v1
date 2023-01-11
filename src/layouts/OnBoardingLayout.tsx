import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Dimensions,
} from "react-native";
import COLORS from "../constants/colors";

interface Props {
  children: React.ReactNode;
}

const { height } = Dimensions.get("window");

export default function OnBoardingLayout({ children }: Props) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.shape,
          styles.topRight,
          {
            borderRadius: SHAPE_WIDTH / 2,
            transform: [
              { translateX: SHAPE_WIDTH / 2 },
              { translateY: -SHAPE_WIDTH / 2 },
            ],
          },
        ]}
      />
      {children}
      <View
        style={[
          styles.shape,
          {
            width: SHAPE_WIDTH * 2,
            borderRadius: SHAPE_WIDTH,
            top: height - SHAPE_WIDTH * 2,
            left: 0,
            transform: [
              { translateX: -SHAPE_WIDTH },
              { translateY: (SHAPE_WIDTH * 5) / 4 },
            ],
          },
        ]}
      />
    </View>
  );
}

const SHAPE_WIDTH = 267;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  shape: {
    position: "absolute",
    width: SHAPE_WIDTH,
    aspectRatio: 1,
    borderRadius: SHAPE_WIDTH / 2,
    backgroundColor: COLORS.primary.main,
  },
  topRight: {
    top: 0,
    right: 0,
  },
});
