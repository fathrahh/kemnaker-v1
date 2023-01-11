import React from "react";
import { Text, TextProps } from "react-native";
import colors, { ColorVariant } from "../constants/colors";
import { TypographyVariant } from "../constants/font";

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: ColorVariant;
}

/**
 * @todo Move typography variant from figma
 * @body Move all typography variant and fontFamily to our code base
 */

export default function Typography({
  children,
  variant = "RalewayRegular",
  color = "primary",
  style,
  ...other
}: TypographyProps) {
  const usedColor = colors[color].main;

  return (
    <Text
      style={[
        {
          color: usedColor,
          fontFamily: variant,
        },
        style,
      ]}
      {...other}
    >
      {children}
    </Text>
  );
}
