export type ColorVariant = "primary" | "secondary" | "neutral";

interface ColorTheme {
  main: string;
}

type ColorVariantMapped<K extends string> = {
  [key in K]: ColorTheme;
};

const primary: ColorTheme = {
  main: "#15406A",
};

const secondary = {
  main: "#D0DCE8",
};
const neutral = {
  main: "#000000",
};

const COLORS: ColorVariantMapped<ColorVariant> = {
  primary,
  secondary,
  neutral,
};

export default COLORS;
