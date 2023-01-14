import { View, StyleSheet } from "react-native";
import { Oops } from "../../assets";
import Typography from "../../components/Typography";
import SafeAreaStatusBar from "../../components/SafeAreaStatusBar";

export default function NotificationScreen() {
  return (
    <SafeAreaStatusBar
      style={{
        alignItems: "center",
        paddingHorizontal: 26,
        justifyContent: "center",
      }}
    >
      <View>
        <Oops />
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Typography
            variant="RobotoRegular"
            style={[
              {
                color: "black",
                marginTop: 24,
              },
              styles.message,
            ]}
          >
            Ups, notifikasi kamu masih{" "}
            <Typography variant="RobotoRegular">kosong</Typography> nih :(
          </Typography>
          <Typography style={styles.message}>
            Segera{" "}
            <Typography variant="RobotoRegular">ikuti pelatihan</Typography>atau{" "}
            <Typography
              variant="RobotoRegular"
              style={{
                fontStyle: "italic",
              }}
            >
              apply
            </Typography>{" "}
            pekerjaan!
          </Typography>
        </View>
      </View>
    </SafeAreaStatusBar>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
  },
});
