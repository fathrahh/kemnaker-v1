import { Button, Image } from "react-native";
import { kementrianLogo } from "../assets/images";
import OnBoardingLayout from "../layouts/OnBoardingLayout";

export default function SplashScreen({ navigation }: any) {
  return (
    <OnBoardingLayout>
      <Image source={kementrianLogo} />
      <Button
        onPress={() => navigation.navigate("OnBoarding")}
        title="Go to onboarding"
      />
    </OnBoardingLayout>
  );
}
