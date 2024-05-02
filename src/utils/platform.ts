import { Platform, StatusBar, Dimensions, PixelRatio } from 'react-native';

export const ROOT = 'root';

export const OSVersion = Platform.Version;
export const PLATFORM = Platform.OS.toUpperCase();
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

const IOS_STATUS_BAR_HEIGHT = 20;
const NATIVE_BAR_CURRENT_HEIGHT = StatusBar.currentHeight || 0;
export const STATUS_BAR_HEIGHT = isIos ? IOS_STATUS_BAR_HEIGHT : NATIVE_BAR_CURRENT_HEIGHT;
export const STATUS_BAR_IS_FIXED = isAndroid && Number(OSVersion) < 21;
export const ACTION_BAR_HEIGHT = STATUS_BAR_IS_FIXED ? 74 : 64;
export const TABBAR_HEIGHT = 50;

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

const screenDimensions = Dimensions.get('screen');
export const SCREEN_HEIGHT = screenDimensions.height;
export const SCREEN_WIDTH = screenDimensions.width;

export const HEADER_HEIGHT = 73;

export const NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT;

export const VIEWPORT_HEIGHT =
  WINDOW_HEIGHT - TABBAR_HEIGHT - ACTION_BAR_HEIGHT - (STATUS_BAR_IS_FIXED ? STATUS_BAR_HEIGHT : 0);

export const REFERENCE_WIDTH = 375;
export const REFERENCE_HEIGHT = 650;
export const HEIGHT_BREAKPOINT_MEDIUM = 685;

export const IS_LARGE_DEVICE = WINDOW_WIDTH >= REFERENCE_WIDTH;
export const IS_SMALL_DEVICE = WINDOW_HEIGHT < HEIGHT_BREAKPOINT_MEDIUM;
export const IS_MEDIUM_DEVICE = WINDOW_HEIGHT > HEIGHT_BREAKPOINT_MEDIUM;
export const IS_SMALL_HIGH_DENSITY = WINDOW_HEIGHT < REFERENCE_HEIGHT && PixelRatio.get() === 3;
export const IS_HIGH_DENSITY = PixelRatio.get() > 3;

const USE_WIDTH = WINDOW_WIDTH / REFERENCE_WIDTH < WINDOW_HEIGHT / REFERENCE_HEIGHT;
export const REF_RATIO = USE_WIDTH ? WINDOW_WIDTH / REFERENCE_WIDTH : WINDOW_HEIGHT / REFERENCE_HEIGHT;

export const refRatioScale = (value: number) => value * REF_RATIO;

export const pixelRatioScale = (value: number) => value * PixelRatio.get();
