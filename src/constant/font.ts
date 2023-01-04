const fontKeyFactory = (_fontFamily: string) => {
  return (_type: string, opt?: string): string => {
    let result = _fontFamily + _type;
    return opt ? result + opt : result;
  };
};

const RalewayFactory = fontKeyFactory("Raleway");
const RobotoFactory = fontKeyFactory("Roboto");

const fonts = {
  Raleway: {
    Thin: RalewayFactory("Thin"),
    SemiBold: RalewayFactory("SemiBold"),
    Regular: RalewayFactory("Regular"),
    Medium: RalewayFactory("Medium"),
    Light: RalewayFactory("Light"),
    Italic: RalewayFactory("Italic"),
    ExtraLight: RalewayFactory("ExtraLight"),
    ExtraBold: RalewayFactory("ExtraBold"),
    Bold: RalewayFactory("Bold"),
    Black: RalewayFactory("Black"),
  },
  Roboto: {
    Thin: RobotoFactory("Thin"),
    Regular: RobotoFactory("Regular"),
    Medium: RobotoFactory("Medium"),
    Light: RobotoFactory("Light"),
    Italic: RobotoFactory("Italic"),
    Bold: RobotoFactory("Bold"),
    Black: RobotoFactory("Black"),
  },
};

export default fonts;
