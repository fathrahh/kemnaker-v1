import React from "react";
import { StyleSheet, Image, View, StyleProp, ViewStyle } from "react-native";
import Icons from "../../assets/icons";
import StarIcon from "../../assets/icons/StarIcon";
import Typography from "../../components/Typography";
import COLORS from "../../constants/colors";
import { numberToCurrency } from "../../utils/numberFormater";

interface Props {
  imgSource?: any;
  title?: string;
  author: string;
  styleContainer?: StyleProp<ViewStyle>;
  location: string;
  salaryRange?: readonly [from?: number, to?: number];
}

export default function CardJobOffers({
  styleContainer,
  imgSource,
  title,
  author,
  location,
  salaryRange = [],
}: Props) {
  const [salaryRangeFrom, salaryRangeTo] = salaryRange;

  return (
    <View style={[styles.container, styleContainer]}>
      <Image source={imgSource} />
      <Typography
        numberOfLines={1}
        ellipsizeMode={"tail"}
        style={styles.title}
        variant="RalewayBold"
      >
        {title}
      </Typography>
      <View style={styles.subContainer}>
        <Typography
          numberOfLines={1}
          ellipsizeMode={"tail"}
          variant="RobotoBold"
          style={styles.author}
        >
          {author}
        </Typography>
        <View style={styles.location}>
          <Icons name="location" width={14} color={COLORS.primary.main} />
          <Typography
            numberOfLines={1}
            ellipsizeMode={"tail"}
            variant="RobotoRegular"
            style={{ fontSize: 10, paddingRight: 2, color: "#000000" }}
          >
            {location ? location : "-"}
          </Typography>
        </View>
      </View>
      <View>
        <Typography
          variant="RobotoBold"
          style={{
            fontSize: 8,
          }}
        >
          Salary :{" "}
          {salaryRangeFrom &&
            numberToCurrency({ number: salaryRangeFrom, prefix: "Rp." }) +
              (salaryRangeTo && " - ")}
          {salaryRangeTo &&
            numberToCurrency({ number: salaryRangeTo, prefix: "Rp." })}
          {isNaN(salaryRangeFrom) && isNaN(salaryRangeFrom) && " -"}
        </Typography>
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
    overflow: "hidden",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 14,
    marginTop: 8,
  },
  subContainer: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
  },
  author: {
    width: "35%",
    marginRight: 4,
    fontSize: 10,
    color: "#000000",
  },
  location: {
    flex: 1,
    backgrounColor: "cyan",
    flexDirection: "row",
    alignItems: "center",
  },
});
