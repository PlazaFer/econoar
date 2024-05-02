import { ComponentProps } from 'react'
import { View } from 'react-native'
import { IColors } from 'src/config/theme'
import { S } from './Card.styles'

type Props = {
  borderColor?: keyof IColors
  backgroundColor?: keyof IColors
  borderRadius?: number
  borderWidth?: number
} & ComponentProps<typeof View>

const Card = ({ borderColor = 'darkGray', backgroundColor = 'lightGray', borderRadius = 24, borderWidth = 1, children }: Props) => {
  return (
    <S.CardView borderColor={borderColor} backgroundColor={backgroundColor} borderRadius={borderRadius} borderWidth={borderWidth}>
      {children}
    </S.CardView>
  )
}

export default Card
