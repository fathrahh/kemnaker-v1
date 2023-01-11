import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Dimensions } from "react-native";
import { HelpIcon, HistoryIcon, KemnakerIcon, UserIcon } from "../assets/icons";
import { AppButtonTabsParamList } from "./NavigationType";
import {
  HelpScreen,
  HomeScreen,
  ProfileScreen,
  RiwayatScreen,
} from "../screens/App";

const { height } = Dimensions.get("window");

const AppTab = createBottomTabNavigator<AppButtonTabsParamList>();

export default function AppNavigation() {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarStyle: {},
        tabBarLabel: () => null,
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <AppTab.Screen
        options={{
          tabBarIcon: () => <KemnakerIcon />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: () => <HistoryIcon />,
        }}
        name="Riwayat"
        component={RiwayatScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: () => <HelpIcon />,
        }}
        name="Bantuan"
        component={HelpScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: () => <UserIcon />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </AppTab.Navigator>
  );
}
