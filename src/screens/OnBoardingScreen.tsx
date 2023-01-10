import { View, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { PresentationSvg } from "../assets/illustrations";
import Button from "../components/Button";
import Typography from "../components/Typography";
import COLORS from "../constant/colors";
import OnBoardingLayout from "../layouts/OnBoardingLayout";
import { RootStackParamList } from "../navigations/NavigationType";
import Dot from "../components/Dot";

const { width } = Dimensions.get("window");

export default function OnBoardingScreen() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "OnBoarding">
    >();

  return (
    <OnBoardingLayout>
      {/* Todo Learn ScrollView Later */}
      <View
        style={{
          flex: 1,
        }}
      >
        <View
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
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Dot backgroundColor="#8A8A8A" />
            <Dot backgroundColor={COLORS.primary.main} />
            <Dot backgroundColor="#8A8A8A" />
          </View>

          <Button
            variant="contained"
            onPress={() => {
              console.log("clicked");
              navigation.navigate("Login");
            }}
          >
            Masuk
          </Button>
          <Button
            style={{
              marginTop: 6,
            }}
            variant="outlined"
            onPress={() => {
              navigation.navigate("Component");
            }}
          >
            Daftar
          </Button>
        </View>
      </View>
    </OnBoardingLayout>
  );
}
