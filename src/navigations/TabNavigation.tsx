import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppButtonTabsParamList } from "./NavigationType";
import {
  HelpScreen,
  HomeScreen,
  ProfileScreen,
  RiwayatScreen,
} from "../screens/App";

const AppTab = createBottomTabNavigator<AppButtonTabsParamList>();

export default function AppNavigation() {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <AppTab.Screen name="Home" component={HomeScreen} />
      <AppTab.Screen name="Riwayat" component={RiwayatScreen} />
      <AppTab.Screen name="Bantuan" component={HelpScreen} />
      <AppTab.Screen name="Profile" component={ProfileScreen} />
    </AppTab.Navigator>
  );
}
