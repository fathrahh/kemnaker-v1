import { useState } from "react";
import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import { EyeIconClose, EyeIconOpen } from "../assets/icons";
import COLORS from "../constants/colors";

interface TextFieldProps extends TextInputProps {}

const styles = StyleSheet.create({
  textField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderRadius: 16,
    borderColor: COLORS.primary.main,
    width: 320,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },

  textBox: {
    flex: 1,
  },
});

export default function TextField({
  secureTextEntry,
  ...other
}: TextFieldProps) {
  const [secureText, setSecureText] = useState(true);

  const renderEyeIcon = secureText ? (
    <EyeIconClose onPress={() => setSecureText(false)} />
  ) : (
    <EyeIconOpen onPress={() => setSecureText(true)} />
  );

  return (
    <View style={[styles.textField]}>
      <TextInput
        secureTextEntry={secureText && secureTextEntry}
        style={styles.textBox}
        {...other}
      />
      {secureTextEntry && renderEyeIcon}
    </View>
  );
}
