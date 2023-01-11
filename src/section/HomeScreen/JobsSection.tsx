import { View, StyleSheet, Image } from "react-native";
import CardCourses from "./CardCourses";
import { JobOfferImage, JobImage } from "../../assets/illustrations";

export default function JobsSection() {
  return (
    <View style={[styles.container]}>
      <CardCourses
        styleContainer={{
          marginRight: 20,
        }}
        imgSource={JobImage}
        title={"lowongan kerja"}
      />
      <CardCourses imgSource={JobOfferImage} title={"pekerjaan"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
