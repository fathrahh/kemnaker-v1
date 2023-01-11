import React from "react";
import { StyleSheet, Image, View, StyleProp, ViewStyle } from "react-native";
import Typography from "../../components/Typography";

interface Props {
  imgSource: any;
  title: string;
  styleContainer?: StyleProp<ViewStyle>;
}

export default function CardCourses({
  styleContainer,
  imgSource,
  title,
}: Props) {
  return (
    <View style={[styles.container, styleContainer]}>
      <Image source={imgSource} />
      <Typography
        style={{
          textTransform: "capitalize",
          fontSize: 16,
        }}
        variant="RalewayBold"
      >
        {title}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0DCE8",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
