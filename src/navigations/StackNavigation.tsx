import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "./NavigationType";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SplashScreen from "../screens/SplashScreen";
import TestComponentScreen from "../screens/TestComponentScreen";
import AppNavigation from "./TabNavigation";
import CourseDetail from "../screens/App/CourseDetail";
import JobOfferFavourite from "../screens/App/JobOfferFavorite";
import NotificationScreen from "../screens/App/NotificationScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
      }}
      initialRouteName="App"
    >
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="App" component={AppNavigation} />
        <Stack.Screen name="AllCourse" component={CourseDetail} />
        <Stack.Screen name="AllJobOffer" component={JobOfferFavourite} />
      </Stack.Group>
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Component" component={TestComponentScreen} />
    </Stack.Navigator>
  );
}
