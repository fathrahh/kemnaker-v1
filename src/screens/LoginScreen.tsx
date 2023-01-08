import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import TextField from "../components/TextField";
import OnBoardingLayout from "../layouts/OnBoardingLayout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function LoginScreen() {
  const [testInput, setTestInput] = useState("");
  const [password, setPassword] = useState("");

  const onChangeInputHandler = (text: string) => {
    setTestInput(text);
  };

  return (
    <OnBoardingLayout>
      <View style={styles.container}>
        <TextField
          value={testInput}
          onChangeText={onChangeInputHandler}
          placeholder="Hello"
        />
        <TextField
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
        />

        <Text>{testInput}</Text>
        <Text>{password}</Text>
      </View>
    </OnBoardingLayout>
  );
}
