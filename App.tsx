import { NavigationContainer } from "@react-navigation/native";
import FontConfig from "./src/components/FontConfig";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <FontConfig>
        <Routes />
      </FontConfig>
    </NavigationContainer>
  );
}
