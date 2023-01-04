import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FontConfig from "./src/components/FontConfig";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FontConfig>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "slide_from_right",
            headerShown: false,
          }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FontConfig>
  );
}
