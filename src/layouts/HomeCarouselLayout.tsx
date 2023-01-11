import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Typography from "../components/Typography";
import fonts from "../constants/font";
import {
  useLinkTo,
  useLinkProps,
  Link,
  ParamListBase,
} from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import { RootStackParamList } from "../navigations/NavigationType";

interface Props {
  children: React.ReactNode;
  title: string;
  to?: To<RootStackParamList>;
}

export default function HomeCarouselLayout({ title, to, children }: Props) {
  return (
    <View
      style={{
        marginBottom: 10,
      }}
    >
      <View style={styles.container}>
        <Typography style={styles.title} variant="RalewayBold">
          {title}
        </Typography>
        {to && (
          <Link to={to} style={styles.textLink}>
            Lihat Semua
          </Link>
        )}
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.carousel}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 16,
  },
  textLink: {
    fontFamily: fonts.Roboto.Regular,
    color: "#8A8A8A",
    textDecorationLine: "underline",
  },
  carousel: {
    flexDirection: "row",
    marginTop: 5,
  },
});
