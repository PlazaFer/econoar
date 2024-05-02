import { dimensions, height, width } from 'src/utils/dimensions'

/**
 * Theme For Styled Components
 * -
 */

export interface IColors {
  background: string;
  primary: string;
  secondary: string;
  highlight: string;
  white: string;
  black: string;
  lightGray: string;
  darkGray: string;
};

export interface ITheme extends IColors {
  size: (value: number, suffix: string) => string;
  windowHeight: string;
  windowWidth: string;
}


export const appTheme: ITheme = {
  background: '#FFFFFF',
  primary: '#6CACE4',
  secondary: '#FFB81C',
  highlight: '#7D4016',
  white: "#FFFFFF",
  black: "#000000",
  lightGray: "#F9FAFC",
  darkGray: "#D3DCE6",
  size: dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`
}

/**
 * Theme For Expo Navigation Header
 * -
 */
export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.secondary,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}
