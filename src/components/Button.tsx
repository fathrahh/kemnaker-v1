import { useTheme } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { RectButton, BaseButton } from "react-native-gesture-handler";

import COLORS, { ColorVariant } from "../constant/colors";
import { TypographyVariant } from "../constant/font";
import Typography from "./Typography";

type ButtonVariant = "contained" | "outlined";

interface Props {
  textVariant?: TypographyVariant;
  children: React.ReactNode;
  variant?: ButtonVariant;
  btnColor?: ColorVariant;
  onPress: () => void;
}

export default function Button({
  textVariant,
  children,
  variant,
  onPress,
  btnColor,
}: Props) {
  const theme = useTheme();

  const backgroundColor =
    variant === "contained" ? COLORS[btnColor].main : "white";
  const borderColor = variant === "contained" ? COLORS[btnColor].main : "red";
  const color = variant === "contained" ? theme.colors.card : theme.colors.text;

  return (
    <View
      style={[
        styles.rootStyle,
        {
          borderColor: "#000000",
          backgroundColor,
        },
      ]}
    >
      <BaseButton {...onPress}>
        <Typography
          style={[styles.buttonText, { color }]}
          variant={textVariant}
        >
          {children}
        </Typography>
      </BaseButton>
    </View>
  );
}

Button.defaultProps = {
  variant: "outlined",
  textVariant: "RalewayBold",
  btnColor: "primary",
};

const styles = StyleSheet.create({
  rootStyle: {
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
