import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";
import { PresentationSvg } from "../assets/illustrations";
import Button from "../components/Button";
import Typography from "../components/Typography";
import COLORS from "../constant/colors";
import OnBoardingLayout from "../layouts/OnBoardingLayout";
import { RootStackParamList } from "../routes/NavigationType";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnBoarding">;
}

export default function OnBoardingScreen({ navigation }: Props) {
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
          onPress={() => {
            navigation.navigate("Component");
          }}
        >
          Masuk
        </Button>
      </View>
    </OnBoardingLayout>
  );
}
