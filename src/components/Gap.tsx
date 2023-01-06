import { View } from "react-native";

interface Props {
  height?: number;
  width?: number;
}

export default function Gap({ height = 0, width = 0 }: Props) {
  return (
    <View
      style={{
        width,
        height,
      }}
    />
  );
}
