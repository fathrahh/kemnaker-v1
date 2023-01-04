import React from "react";
import { StyleSheet, View } from "react-native";
import COLORS from "../constant/colors";

interface IProps {
  children: React.ReactNode;
}

export default function OnBoardingLayout({ children }: IProps) {
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
          styles.bottomLeft,
          {
            width: SHAPE_WIDTH * 2,
            borderRadius: SHAPE_WIDTH,
            transform: [
              { translateX: -SHAPE_WIDTH },
              { translateY: (SHAPE_WIDTH * 5) / 4 },
            ],
          },
          ,
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
  bottomLeft: {
    bottom: 0,
    left: 0,
  },
});
