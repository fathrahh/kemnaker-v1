import React from "react";
import { Text, TextProps } from "react-native";

interface TypographyProps extends TextProps {}

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
