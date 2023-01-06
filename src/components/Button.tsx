import { useTheme } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

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
  const borderColor =
    variant === "contained" ? COLORS[btnColor].main : theme.colors.background;
  const color = variant === "contained" ? theme.colors.card : theme.colors.text;

  return (
    <RectButton
      style={[
        styles.rootStyle,
        {
          borderWidth: 1,
          borderStyle: "solid",
          backgroundColor,
          borderColor,
        },
      ]}
      {...onPress}
    >
      <Typography style={[styles.buttonText, { color }]} variant={textVariant}>
        {children}
      </Typography>
    </RectButton>
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
    borderRadius: 12,
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
