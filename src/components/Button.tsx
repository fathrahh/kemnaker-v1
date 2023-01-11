import { Theme, useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  StyleProp,
  Pressable,
  PressableProps,
  ViewStyle,
} from "react-native";

import COLORS, { ColorVariant } from "../constants/colors";
import { TypographyVariant } from "../constants/font";
import Typography from "./Typography";

type ButtonVariant = "contained" | "outlined";

interface Props extends PressableProps {
  textVariant?: TypographyVariant;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  onPressStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  btnColor?: ColorVariant;
}

export default function Button({
  textVariant,
  children,
  style,
  onPressStyle,
  variant,
  btnColor,
  ...other
}: Props) {
  const theme = useTheme();

  const backgroundColor =
    variant === "contained" ? COLORS[btnColor].main : "white";
  const borderColor =
    variant === "contained" ? COLORS[btnColor].main : "#8A8A8A";
  const color = variant === "contained" ? theme.colors.card : "#8A8A8A";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.rootStyle,
        { backgroundColor, borderColor },
        style,
        pressed && onPressStyle,
      ]}
      {...other}
    >
      <Typography style={[styles.buttonText, { color }]} variant={textVariant}>
        {children}
      </Typography>
    </Pressable>
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
