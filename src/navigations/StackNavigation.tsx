import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "./NavigationType";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SplashScreen from "../screens/SplashScreen";
import TestComponentScreen from "../screens/TestComponentScreen";
import HomeScreen from "../screens/App/HomeScreen";
import AppNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "simple_push",
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={AppNavigation} />
      <Stack.Screen name="Component" component={TestComponentScreen} />
    </Stack.Navigator>
  );
}
