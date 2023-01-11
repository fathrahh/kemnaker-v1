import React from "react";
import { StyleSheet, Image, View, StyleProp, ViewStyle } from "react-native";
import StarIcon from "../../assets/icons/StarIcon";
import Typography from "../../components/Typography";

interface Props {
  imgSource?: any;
  title?: string;
  styleContainer?: StyleProp<ViewStyle>;
  rating: number;
}

export default function TrainingCardPost({
  styleContainer,
  imgSource,
  title,
  rating,
}: Props) {
  return (
    <View style={[styles.container, styleContainer]}>
      <Image source={imgSource} />
      <Typography style={styles.title} variant="RalewayBold">
        {title}
      </Typography>
      <View style={styles.subContainer}>
        <Typography variant="RobotoRegular" style={styles.author}>
          Online oleh <Typography variant="RobotoBold">Feb Academy</Typography>
        </Typography>
        <View style={styles.rating}>
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <StarIcon key={idx} fill={idx + 1 > rating && "#8A8A8A"} />
            ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 210,
    backgroundColor: "#D0DCE8",
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 10,
  },
  title: {
    textTransform: "capitalize",
    fontSize: 12,
    marginTop: 8,
  },
  subContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    fontSize: 10,
    color: "#000000",
  },
  rating: {
    flexDirection: "row",
  },
});
