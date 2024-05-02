import { WINDOW_HEIGHT, WINDOW_WIDTH } from './platform';

const DEFAULT_MODERATE_SCALE_FACTOR = 0.5;
const [shortDimension, longDimension] =
  WINDOW_WIDTH < WINDOW_HEIGHT ? [WINDOW_WIDTH, WINDOW_HEIGHT] : [WINDOW_HEIGHT, WINDOW_WIDTH];

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = DEFAULT_MODERATE_SCALE_FACTOR) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size: number, factor = DEFAULT_MODERATE_SCALE_FACTOR) =>
  size + (verticalScale(size) - size) * factor;

export { scale, verticalScale, moderateScale, moderateVerticalScale };
