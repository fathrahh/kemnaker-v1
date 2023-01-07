import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useInterpolateConfig,
} from "react-native-reanimated";
import COLORS from "../constant/colors";

const styles = StyleSheet.create({
  dot: {
    width: 8,
    aspectRatio: 1,
    borderRadius: 4,
  },
});

interface DotProps {
  backgroundColor: string;
  opacity: number;
}

export default function Dot({ backgroundColor, opacity }: DotProps) {
  // const backgroundColor = interpolate()

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor,
          opacity,
        },
      ]}
    />
  );
}

Dot.defaultProps = {
  opacity: 1,
};
