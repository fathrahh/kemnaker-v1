import { View } from "react-native";
import { JobOfferImage } from "../../assets/illustrations";
import HomeCarouselLayout from "../../layouts/HomeCarouselLayout";
import CardJobOffers from "./CardJobOffers";

export default function PopularJobOffers() {
  return (
    <HomeCarouselLayout
      to={{
        screen: "AllJobOffer",
      }}
      title={"Lowongan Kerja Terpopuler"}
    >
      <View style={{ marginRight: 10 }}>
        <CardJobOffers
          imgSource={JobOfferImage}
          title={"Belajar Desain Grafis Pemula"}
          author={"mang ucup"}
          location={"Jakarta/Bandung/Semarang"}
          salaryRange={[]}
        />
      </View>
      <View style={{ marginRight: 10 }}>
        <CardJobOffers
          imgSource={JobOfferImage}
          title={"Belajar Desain Grafis Pemula"}
          author={"mang ucup"}
          location={"Jakarta/Bandung/Semarang"}
          salaryRange={[200, 400]}
        />
      </View>
    </HomeCarouselLayout>
  );
}
