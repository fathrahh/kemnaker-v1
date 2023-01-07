import { useRef } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PresentationSvg } from "../assets/illustrations";
import Button from "../components/Button";
import Typography from "../components/Typography";
import COLORS from "../constant/colors";
import OnBoardingLayout from "../layouts/OnBoardingLayout";
import { RootStackParamList } from "../routes/NavigationType";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnBoarding">;
}

const { width } = Dimensions.get("window");
const SLIDES = new Array(4).fill(0);

export default function OnBoardingScreen({ navigation }: Props) {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <OnBoardingLayout>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator
        style={{
          flex: 1,
          backgroundColor: "cyan",
        }}
      >
        {SLIDES.map((_, index) => (
          <View
            key={index + 1}
            style={{
              flex: 1,
              width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PresentationSvg />
            <Typography
              style={{
                padding: 5,
                fontSize: 20,
                marginTop: 15,
                borderColor: COLORS.primary.main,
                borderBottomWidth: 2,
              }}
              variant="RalewayBold"
            >
              Ikut Pelatihan yang Kamu Mau
            </Typography>
            <Typography
              style={{
                padding: 10,
                textAlign: "center",
              }}
            >
              Tingkatkan skill kamu dengan mengikuti pelatihan dari lembaga
              pelatihan terpercaya!
            </Typography>
            <Button
              onPress={() => {
                navigation.navigate("Component");
              }}
            >
              Masuk
            </Button>
          </View>
        ))}
      </ScrollView>
      <Button onPress={() => scrollViewRef.current.scrollTo()}>slides</Button>
    </OnBoardingLayout>
  );
}
