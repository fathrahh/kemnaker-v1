import { useRef } from "react";

import {
  Button,
  DrawerLayoutAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Typography from "./src/components/Typography";

export default function App() {
  const drawer = useRef(null);

  function navigationView() {
    return (
      <View style={[styles.container]}>
        <Typography>I'm In The Drawer!</Typography>
      </View>
    );
  }

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <View style={{ ...styles.shape, ...styles.topRight }} />
        <Typography style={styles.greeting}>Hallo Febri</Typography>
        <View style={{ ...styles.shape, ...styles.bottomLeft }} />
        <Button
          onPress={() => drawer.current.openDrawer()}
          title="Open Drawer"
        />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  shape: {
    position: "absolute",
    width: 140,
    aspectRatio: 1,
    borderRadius: 140 / 2,
    backgroundColor: "black",
  },
  topRight: {
    top: 0,
    transform: [{ translateX: 50 }],
    right: 0,
  },
  bottomLeft: {
    bottom: 0,
    transform: [{ translateX: -50 }],
    left: 0,
  },
  greeting: {
    fontSize: 36,
    fontWeight: "800",
  },
});
