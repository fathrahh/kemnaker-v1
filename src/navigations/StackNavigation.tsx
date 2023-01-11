import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "./NavigationType";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SplashScreen from "../screens/SplashScreen";
import TestComponentScreen from "../screens/TestComponentScreen";
import AppNavigation from "./TabNavigation";
import CourseDetail from "../screens/App/CourseDetail";
import JobOfferFavourite from "../screens/App/JobOfferFavorite";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "simple_push",
        headerShown: false,
      }}
      initialRouteName="App"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Group
        screenOptions={{
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="App" component={AppNavigation} />
        <Stack.Screen name="AllCourse" component={CourseDetail} />
        <Stack.Screen name="AllJobOffer" component={JobOfferFavourite} />
      </Stack.Group>
      <Stack.Screen name="Component" component={TestComponentScreen} />
    </Stack.Navigator>
  );
}
