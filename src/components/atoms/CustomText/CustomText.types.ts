// CustomText.types.ts
import { ComponentProps } from 'react';
import type { StyleProp, Text, TextStyle } from 'react-native';
import { SIZES } from 'src/config/fonts';
import { IColors } from 'src/config/theme';

export type Sizes = keyof typeof SIZES;

export type CustomTextProps = {
  size?: Sizes;
  weight?: 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: keyof IColors;
  numberOfLines?: number;
  customStyle?: StyleProp<TextStyle>;
} & ComponentProps<typeof Text>;
