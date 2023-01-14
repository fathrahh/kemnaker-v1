import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Dimensions, StatusBar } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Icon, { IconsKey } from "../assets/icons";
import { AppButtonTabsParamList } from "./NavigationType";
import {
  HelpScreen,
  HomeScreen,
  ProfileScreen,
  RiwayatScreen,
} from "../screens/App";
import COLORS from "../constants/colors";

const screenDimension = Dimensions.get("screen");
const windowDimension = Dimensions.get("window");

const bottomNavigationPadding =
  screenDimension.height - windowDimension.height - StatusBar.currentHeight;

console.log(bottomNavigationPadding);

const AppTab = createBottomTabNavigator<AppButtonTabsParamList>();

type TabIconProps = {
  focused?: boolean;
  color?: string;
  size?: number;
  name: IconsKey;
};

const TabButtonIcon = ({ focused, name }: TabIconProps) => {
  return (
    <Icon
      style={[{ width: 24, height: 24 }]}
      color={focused && COLORS.primary.main}
      name={name}
    />
  );
};

export default function AppNavigation() {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          overflow: "hidden",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          width: 370,
          height: 70,
          elevation: 4,
          left: windowDimension.width / 2,
          bottom:
            screenDimension.height -
            windowDimension.height -
            StatusBar.currentHeight -
            25,
          transform: [
            {
              translateX: -(370 / 2),
            },
          ],
        },
        tabBarLabel: () => null,
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonIcon focused={focused} name="kemnaker" />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonIcon focused={focused} name="history" />
          ),
        }}
        name="Riwayat"
        component={RiwayatScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonIcon focused={focused} name="help" />
          ),
        }}
        name="Bantuan"
        component={HelpScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonIcon focused={focused} name="user" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </AppTab.Navigator>
  );
}
