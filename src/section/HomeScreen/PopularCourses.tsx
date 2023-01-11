import { StyleSheet, View, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import Typography from "../../components/Typography";
import fonts from "../../constants/font";
import { JobOfferImage, JobImage } from "../../assets/illustrations";
import TrainingCardPost from "./TrainingCardPost";

export default function PopularCourses() {
  return (
    <View
      style={{
        marginBottom: 10,
      }}
    >
      <View style={styles.container}>
        <Typography style={styles.title} variant="RalewayBold">
          Pelatihan Terpopuler
        </Typography>
        <Link
          style={styles.textLink}
          to={{
            screen: "CourseDetail",
            params: {
              id: "1",
            },
          }}
        >
          Lihat Semua
        </Link>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.carousel}
      >
        {Array(8)
          .fill(null)
          .map((_, idx) => (
            <View key={idx.toString() + "test"} style={{ marginRight: 10 }}>
              <TrainingCardPost
                imgSource={JobOfferImage}
                title={"Belajar Desain Grafis Pemula"}
                rating={idx}
              />
            </View>
          ))}
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
