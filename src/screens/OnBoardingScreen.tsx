import { Button, View } from "react-native";
import { PresentationSvg } from "../assets/illustrations";
import Typography from "../components/Typography";
import COLORS from "../constant/colors";
import OnBoardingLayout from "../layouts/OnBoardingLayout";

export default function OnBoardingScreen({ navigation }) {
  return (
    <OnBoardingLayout>
      <View
        style={{
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
          onPress={() => navigation.navigate("Splash")}
          title="Go to onboarding"
        />
      </View>
    </OnBoardingLayout>
  );
}
