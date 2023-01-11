import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function StarIcon({ fill, ...other }: SvgProps) {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...other}>
      <Path
        d="M9.688 3.938H6.108L5 .467l-1.11 3.47H.313l2.891 2.14L2.11 9.531 5 7.391l2.89 2.14-1.109-3.469 2.907-2.125z"
        fill={fill ? fill : "#FFCE31"}
      />
    </Svg>
  );
}

export default memo(StarIcon);
