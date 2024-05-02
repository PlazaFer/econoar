import { dimensions, height, width } from 'src/utils/dimensions'

/**
 * Theme For Styled Components
 * -
 */
export const appTheme = {
  background: '#FFFFFF',
  primary: '#6CACE4',
  secondary: '#FFB81C',
  highlight: '#7D4016',
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
