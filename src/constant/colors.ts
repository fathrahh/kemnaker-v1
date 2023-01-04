export type ColorVariant = "primary" | "secondary" | "neutral";

interface ColorTheme {
  main: string;
}

type ColorVariantMapped<K extends string> = {
  [key in K]: ColorTheme;
};

const primary: ColorTheme = {
  main: "",
};

const secondary = {
  main: "#D0DCE8",
};
const neutral = {
  main: "#000000",
};

export default {
  primary,
  secondary,
  neutral,
} as ColorVariantMapped<ColorVariant>;
