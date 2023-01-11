import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { RootStackParamList } from "../navigations/NavigationType";
import OnBoardingLayout from "../layouts/OnBoardingLayout";
import Button from "../components/Button";
import Gap from "../components/Gap";
import TextField from "../components/TextField";

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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onChangeInputHandler = (text: string) => {
    setTestInput(text);
  };

  const login = async () => {
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (testInput === "admin" || password === "admin") {
            resolve(response);
          }
          reject("Password Salah");
        }, 1000);
      });
      await AsyncStorage.setItem("username", testInput);
      navigation.navigate("App");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <OnBoardingLayout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <TextField
              value={testInput}
              onChangeText={onChangeInputHandler}
              placeholder="Email"
            />
            <Gap height={20} />
            <TextField
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
            />
          </View>
          <Button
            style={{
              marginTop: 20,
            }}
            onPress={login}
            variant="contained"
          >
            Masuk
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </OnBoardingLayout>
  );
}
