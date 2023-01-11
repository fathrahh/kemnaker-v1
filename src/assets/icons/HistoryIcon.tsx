import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function HistoryIcon({ stroke, strokeWidth, ...other }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...other}>
      <Path
        d="M20.5 11.3V7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35M8 7h8M9 11h6"
        stroke={stroke ? stroke : "#292D32"}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.211 14.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01zM17.7 15.28c.3 1.08 1.14 1.92 2.22 2.22"
        stroke={stroke ? stroke : "#292D32"}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default memo(HistoryIcon);