import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Dimensions, Pressable, StatusBar } from "react-native";
import { HelpIcon, HistoryIcon, KemnakerIcon, UserIcon } from "../assets/icons";
import { AppButtonTabsParamList } from "./NavigationType";
import {
  HelpScreen,
  HomeScreen,
  ProfileScreen,
  RiwayatScreen,
} from "../screens/App";
import COLORS from "../constants/colors";

const { width, height } = Dimensions.get("window");

const AppTab = createBottomTabNavigator<AppButtonTabsParamList>();

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
          left: width / 2,
          top: height - 10 - StatusBar.currentHeight,
          transform: [
            {
              translateX: -(370 / 2),
            },
          ],
        },
        // tabBarButton: ({ children, ...other }) => {
        //   return (
        //     <Pressable
        //       {...other}
        //       style={[
        //         {
        //           borderWidth: 0,
        //           margin: 10,
        //           width: 50,
        //           borderRadius: 50 / 2,
        //           aspectRatio: 1,
        //         },
        //       ]}
        //     >
        //       {children}
        //     </Pressable>
        //   );
        // },
        tabBarLabel: () => null,
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => <KemnakerIcon />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <HistoryIcon
              style={{
                ...(focused && { transform: [{ scale: 1.18 }] }),
              }}
              stroke={focused && COLORS.primary.main}
            />
          ),
        }}
        name="Riwayat"
        component={RiwayatScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <HelpIcon stroke={focused && COLORS.primary.main} />
          ),
        }}
        name="Bantuan"
        component={HelpScreen}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) => <UserIcon />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </AppTab.Navigator>
  );
}
