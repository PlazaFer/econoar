/* eslint-disable @typescript-eslint/naming-convention */
import { moderateScale } from '../utils/scaling';

export const SIZES = {
  xsmall: moderateScale(8),
  msmall: moderateScale(10),
  small: moderateScale(12),
  medium: moderateScale(14),
  xmedium: moderateScale(16),
  xxmedium: moderateScale(18),
  big: moderateScale(20),
  mbig: moderateScale(22),
  xbig: moderateScale(24),
  large: moderateScale(28),
  xlarge: moderateScale(32),
  xxlarge: moderateScale(40),
  xxxlarge: moderateScale(64),
};
