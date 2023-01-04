import React from "react";
import { Text, TextProps } from "react-native";

type TypographyVariant =
  | "RalewayBold"
  | "RalewayRegular"
  | "RobotoBold"
  | "RobotoRegular";

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
}

/**
 * @todo Move typography variant from figma
 * @body Move all typography variant and fontFamily to our code base
 */

export default function Typography({
  children,
  variant = "RalewayRegular",
  color,
  style,
  ...other
}: TypographyProps) {
  return (
    <Text
      style={[
        {
          color: "black",
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
