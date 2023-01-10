import { View, StyleSheet } from "react-native";
import Typography from "../../components/Typography";
import { StatusBar } from "react-native";
import SafeAreaStatusBar from "../../components/SafeAreaStatusBar";

export default function HomeScreen() {
  return (
    <SafeAreaStatusBar>
      <View>
        <View>
          <Typography color="neutral">Halo,</Typography>
          <Typography>Febriana Yunhas Putri!</Typography>
        </View>
      </View>
      <Typography>Home Screen</Typography>
    </SafeAreaStatusBar>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    paddingTop: StatusBar.currentHeight,
  },
});
