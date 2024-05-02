// CustomText.styles.ts
import styled from 'styled-components/native';
import { IColors } from 'src/config/theme';
import { moderateScale } from 'src/utils/scaling';
import { SIZES } from 'src/config/fonts';

export interface TextWrapperProps {
  color?: keyof IColors;
  weight?: string;
  size?: number;
  textAlign?: string;
}

export const S = {
  Text: styled.Text<TextWrapperProps>`
    color: ${({ theme, color }) => color ? theme[color] : theme.primary}; 
    fontFamily: ${({ weight }) => weight ? weight : 'regular'};
    fontSize: ${({ size }) => size ? size.toString() : SIZES.medium}; 
    textAlign: ${({ textAlign }) => textAlign ? textAlign : 'center'};
  `,
};
