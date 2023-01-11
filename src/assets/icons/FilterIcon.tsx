import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

function FilterIcon({ stroke, ...other }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...other}>
      <G
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.33 16.593h-6.3M13.14 6.9h6.301" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.726 6.846A2.355 2.355 0 006.363 4.5 2.355 2.355 0 004 6.846a2.355 2.355 0 002.363 2.347 2.355 2.355 0 002.363-2.347zM20 16.554a2.354 2.354 0 00-2.362-2.346 2.355 2.355 0 00-2.364 2.346 2.355 2.355 0 002.364 2.346A2.354 2.354 0 0020 16.554z"
        />
      </G>
    </Svg>
  );
}

export default React.memo(FilterIcon);
