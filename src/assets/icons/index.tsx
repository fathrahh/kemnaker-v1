import React, { memo } from "react";
import { ColorValue } from "react-native";
import { SvgProps } from "react-native-svg";

import EyeIconClose from "./eye-icon-close.svg";
import EyeIconOpen from "./eye-icon-open.svg";
import KemnakerIcon from "./kemnaker-icon.svg";
import NotificationIcon from "./notification-icon.svg";
import SearchIcon from "./search-icon.svg";
import UserIcon from "./user-icon.svg";
import HistoryIcon from "./history-icon.svg";
import HelpIcon from "./help-icon.svg";
import FilterIcon from "./filter-icon.svg";
import LocationIcon from "./location-icon.svg";

const Icons = {
  "eye-icon-close": EyeIconClose,
  "eye-icon-open": EyeIconOpen,
  kemnaker: KemnakerIcon,
  notification: NotificationIcon,
  search: SearchIcon,
  user: UserIcon,
  history: HistoryIcon,
  help: HelpIcon,
  filter: FilterIcon,
  location: LocationIcon,
};

export type IconsKey = keyof typeof Icons;

interface Props extends SvgProps {
  name: IconsKey;
}

const Icon = React.forwardRef(({ name, color, ...other }: Props, ref) => {
  let colorUsed: ColorValue = "#292D32";
  if (color) {
    colorUsed = color;
  }

  const IconComponent = Icons[name];
  return <IconComponent color={colorUsed} {...other} />;
});

export default memo(Icon);
