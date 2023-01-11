import { View } from "react-native";
import { JobOfferImage } from "../../assets/illustrations";
import TrainingCardPost from "./TrainingCardPost";
import HomeCarouselLayout from "../../layouts/HomeCarouselLayout";

export default function PopularJobOffers() {
  return (
    <HomeCarouselLayout
      to={{
        screen: "AllJobOffer",
      }}
      title={"Lowongan Kerja Terpopuler"}
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
    </HomeCarouselLayout>
  );
}
