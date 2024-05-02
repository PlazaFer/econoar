// CustomText.styles.ts
import styled from 'styled-components/native'
import { IColors } from 'src/config/theme'

export interface CardViewProps {
  borderColor?: keyof IColors
  backgroundColor?: keyof IColors
  borderRadius?: number
  borderWidth?: number
}

export const S = {
  CardView: styled.View<CardViewProps>`
    background-color: ${({ theme, backgroundColor }) => backgroundColor ? theme[backgroundColor] : theme.lightGray};
    border-color: ${({ theme, borderColor }) => borderColor ? theme[borderColor] : theme.darkGray};
    border-width: ${({ borderWidth }) => borderWidth ? borderWidth : 1}px;
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : 24};
    padding: 16px;
  `
}
