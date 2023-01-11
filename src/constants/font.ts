const fontKeyFactory = (_fontFamily: string) => {
  return (_type: string, opt?: string): string => {
    let result = _fontFamily + _type;
    return opt ? result + opt : result;
  };
};
export type TypographyVariant =
  | "RalewayBold"
  | "RalewayRegular"
  | "RobotoBold"
  | "RobotoRegular";

const RalewayFactory = fontKeyFactory("Raleway");
const RobotoFactory = fontKeyFactory("Roboto");

const fonts = {
  Raleway: {
    Regular: RalewayFactory("Regular"),
    Bold: RalewayFactory("Bold"),
    // Thin: RalewayFactory("Thin"),
    // SemiBold: RalewayFactory("SemiBold"),
    // Medium: RalewayFactory("Medium"),
    // Light: RalewayFactory("Light"),
    // Italic: RalewayFactory("Italic"),
    // ExtraLight: RalewayFactory("ExtraLight"),
    // ExtraBold: RalewayFactory("ExtraBold"),
    // Black: RalewayFactory("Black"),
  },
  Roboto: {
    Regular: RobotoFactory("Regular"),
    Bold: RobotoFactory("Bold"),
    // Thin: RobotoFactory("Thin"),
    // Medium: RobotoFactory("Medium"),
    // Light: RobotoFactory("Light"),
    // Italic: RobotoFactory("Italic"),
    // Black: RobotoFactory("Black"),
  },
};

export default fonts;
