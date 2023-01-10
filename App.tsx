import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import FontConfig from "./src/components/FontConfig";
import Routes from "./src/navigations/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <FontConfig>
        <Routes />
      </FontConfig>
    </NavigationContainer>
  );
}
