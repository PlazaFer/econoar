// CustomText.styles.ts
import styled from 'styled-components/native';
import { IColors } from 'src/config/theme';

export interface TextWrapperProps {
  color: keyof IColors;
  weight: string;
  size: number;
  textAlign: string;
}

export const S = {
  Text: styled.Text<TextWrapperProps>`
    color: ${({ theme, color }) => theme[color]}; 
    fontFamily: ${({ weight }) => weight};
    fontSize: ${({ size }) => size.toString()}; 
    textAlign: ${({ textAlign }) => textAlign};
  `,
};
