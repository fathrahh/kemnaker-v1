import { useRef } from "react";

import { Button, DrawerLayoutAndroid, StyleSheet, View } from "react-native";
import Typography from "../components/Typography";
import fonts from "../constant/font";

export default function Example() {
  const drawer = useRef(null);

  function navigationView() {
    return (
      <View style={[styles.container]}>
        <Typography>I'm I Drawers!</Typography>
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
        <Typography variant="RalewayBold">I'm I Drawers!</Typography>
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
    transform: [{ translateX: -50 }],
    bottom: 0,
    left: 0,
  },
  greeting: {
    fontSize: 36,
    textTransform: "capitalize",
  },
});
