import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as StoreProvider } from "react-redux";

import FontConfig from "./src/components/FontConfig";
import Routes from "./src/navigations/StackNavigation";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
          <FontConfig>
            <Routes />
          </FontConfig>
        </NavigationContainer>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
