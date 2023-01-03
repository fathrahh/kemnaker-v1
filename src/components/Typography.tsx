import React from "react";
import { Text, TextProps } from "react-native";

interface TypographyProps extends TextProps {}

/**
 * @todo Move typography variant from figma
 * @body Move all typography variant and fontFamily to our code base
 */

const Typography: React.FC<TypographyProps> = ({ children, ...other }) => {
  return (
    <Text
      style={{
        color: "black",
      }}
      {...other}
    >
      {children}
    </Text>
  );
};

export default Typography;
