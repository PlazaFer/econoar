import styled from 'styled-components/native'
import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'
import { Text } from 'react-native'
import useMainVariablesMutation from 'src/api/mutations/useMainVariablesMutation'
import CustomText from 'src/components/atoms/CustomText/CustomText'
import { appTheme } from 'src/config/theme'

export default function HomeScreen() {
  const { mutateAsync: getMainVariables, isPending: isGetMainVariablesPending } = useMainVariablesMutation()

  const handleGetVariables = async () => {
    const response = await getMainVariables()

    console.log('response', JSON.stringify(response.data, null, 2))
  }

  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        <Stack.Screen options={{ title: 'Home Screen' }} />

        <S.Title testID="home-screen-title">🏠</S.Title>
        <S.Text testID="home-screen-text">Go to app/index.tsx to edit</S.Text>

        <LinkButton href="/second" text="Go To Second Screen" />
        <S.FetchButton onPress={handleGetVariables} disabled={isGetMainVariablesPending}>
          <CustomText color='secondary' weight='extraBold' size='large'>
            Text Prueba
          </CustomText>
        </S.FetchButton>
      </S.Content>
    </ScreenLayout>
  )
}

const S = {
  Content: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.Text`
    color: ${(p) => p.theme.primary};
    font-family: medium;
    font-weight: 900;
    font-size: ${(p) => p.theme.size(200, 'px')};
    margin-bottom: ${(p) => p.theme.size(10, 'px')};
  `,
  Text: styled.Text`
    color: ${(p) => p.theme.primary};
    font-family: medium;
    font-weight: 700;
    font-size: ${(p) => p.theme.size(15, 'px')};
    margin-bottom: ${(p) => p.theme.size(15, 'px')};
  `,
  FetchButton: styled.Pressable`
    padding: ${(p) => p.theme.size(10, 'px')} ${(p) => p.theme.size(20, 'px')};
    border-color: ${(p) => p.theme.primary};
    border-width: ${(p) => p.theme.size(1, 'px')};
    border-radius: ${(p) => p.theme.size(5, 'px')};
    background-color: transparent;
  `
}
