import { Color } from "csstype";

interface ThemeMedia {
  mobile?: string;
  web?: string;
  tablet?: string;
}

export interface Theme {
  fontFamily: string;
  colorPrimary: Color;
  colorSecondary: Color;
  colorRed: Color;
  colorGreen: Color;
  colorBlue: Color;
  colorAmber: Color;
  colorGrey: Color;
  textPrimary: Color;
  textSecondary: Color;
  textWhite: Color;
  colorRandom(): string;
  media: ThemeMedia;
}

const colorGreen = "#4caf50";
const colorBlue = "#2196f3";
const colorAmber = "#ff9800";
const theme: Theme = {
  fontFamily: `"CircularStd",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  colorPrimary: "#008489",
  colorSecondary: "#ff5960",
  colorRed: "#f44336",
  colorGreen,
  colorBlue,
  colorAmber,
  colorGrey: "#ebebeb",
  textPrimary: "#484848",
  textSecondary: "#906e62",
  textWhite: "#f7ffff",
  media: {
    mobile: "@media all and (max-width: 414px)"
  },
  colorRandom: (): string => {
    const number = Math.floor(Math.random() * 3);

    if (number === 0) return colorGreen;

    if (number === 1) return colorBlue;

    return colorAmber;
  }
};

export default theme;
