import { useState } from "react";
import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import { EyeIconClose, EyeIconOpen } from "../assets/icons";
import COLORS from "../constant/colors";

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
    <EyeIconOpen onPress={() => setSecureText(false)} />
  ) : (
    <EyeIconClose onPress={() => setSecureText(false)} />
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
