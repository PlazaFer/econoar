import React from 'react'
import { Text, Animated } from 'react-native'

// import { Colors } from 'theme';

import { CustomTextProps } from './CustomText.types'
import { S } from './CustomText.styles'
import { appTheme } from 'src/config/theme'
import { SIZES } from 'src/config/fonts'

const CustomText = ({
  size = 'medium',
  weight = 'regular',
  align = 'center',
  customStyle,
  children,
  color = 'primary',
  ...props
}: CustomTextProps) => {
  const textStyles = [customStyle, props.style]

  return (
    <S.Text allowFontScaling={false} color={color} weight={weight} size={SIZES[size]} textAlign={align} style={textStyles} {...props}>
      {children}
    </S.Text>
  )
}

export default React.memo(CustomText)
