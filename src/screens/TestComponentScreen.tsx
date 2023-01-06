import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Button as NativeButton,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import Button from "../components/Button";

import Gap from "../components/Gap";
import Typography from "../components/Typography";
import { RootStackParamList } from "../routes/NavigationType";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Component">;
}

export default function TestComponentScreen({ navigation }: Props) {
  return (
    <View style={[styles.container]}>
      <Gap height={20} />
      <View>
        <Typography variant="RalewayBold">Native Button</Typography>
        <NativeButton onPress={() => navigation.goBack()} title="hello" />
      </View>
      <Gap height={20} />
      <View>
        <Typography variant="RalewayBold">Custom Button</Typography>
        <StatusBar />
      </View>
      <Button
        onPress={() => {
          navigation.navigate("Splash");
        }}
      >
        navigate to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
