export type ThemeType = {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    primaryOpacity: string;
    primaryContrast: string;
    secondary: string;
    secondaryContrast: string;
    secondaryLight: string;
    secondaryDark: string;
    secondaryOpacity: string;
    title: string;
    textDetail: string;
    description: string;
    error: string;
    errorOpacity: string;
    alert: string;
    alertOpacity: string;
    success: string;
    successOpacity: string;
    line: string;
    shape: string;
    shapeDark: string;
    shapeLight: string;
    titleWhite: string;
    backgroundWhite: string;
    backgroundGrey: string;
    dark: string;
    transparent: string;
    text: { base: string; primary: string; secondary: string };
    action: { add: string; delete: string; close: string };
    background: { primary: string; header: string; inputs: string };
  };
  spacing: {
    padding: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xlg: string;
    };
    margin: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xlg: string;
    };
  };
  fonts: {
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
  };
  fontSize: {
    xlg: string;
    lg: string;
    md: string;
    sm: string;
    xsm: string;
  };
  radius: {
    lg: string;
    md: string;
    sm: string;
  };
  scale: {
    xlg: number;
    lg: number;
    md: number;
    sm: number;
    xsm: number;
  };
  breakPoints: {
    sm?: string;
    md: string;
    lg?: string;
    xl?: string;
  };
};
