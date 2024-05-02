import { useMemo } from 'react'
import { ImageBackground, View } from 'react-native'
import styled from 'styled-components/native'
import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'
import useMainVariablesQuery from 'src/api/mutations/useMainVariablesQuery'
import CustomText from 'src/components/atoms/CustomText/CustomText'
import VariableType from 'src/api/types/variable.types'
import backgroundHeader from 'src/assets/images/header/BackgroundHeader.png'

export default function HomeScreen() {
  const { data, isLoading } = useMainVariablesQuery()

  const inflacionMensual = useMemo(() => {
    return data?.results?.find((element) => {
      if (element.idVariable === VariableType.InflacionMensualVariacionPorcentaje) return element
    })
  }, [data])

  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        <Stack.Screen options={{ title: 'Home Screen' }} />
        <S.BackgroundImageWrapper
          source={backgroundHeader}
          resizeMode="contain"
          imageStyle={{ right: undefined, width: undefined, aspectRatio: 1.05 }}>
          <S.InflacionWrapper>
            {isLoading ? (
              <>
                <CustomText color="primary" weight="semiBold" size="big">
                  Cargando...
                </CustomText>
              </>
            ) : (
              <>
                <CustomText color="white" weight="semiBold" size="xxmedium">
                  Inflacion Mensual:
                </CustomText>
                <CustomText color="secondary" weight="bold" size="big">
                  {`${inflacionMensual?.valor} %`}
                </CustomText>
              </>
            )}
          </S.InflacionWrapper>
        </S.BackgroundImageWrapper>

        {/* <LinkButton href="/second" text="Go To Second Screen" /> */}
      </S.Content>
    </ScreenLayout>
  )
}

const S = {
  Content: styled.View`
    flex: 1;
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
  `,
  InflacionWrapper: styled.View`
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    margin-top: 20px;
    position: absolute;
    right: 50;
    top: 25;
  `,
  BackgroundImageWrapper: styled.ImageBackground`
    background-color: ${({ theme }) => theme.primary};
    align-self: center;
    position: 'relative';
    height: 116px;
    width: 345px;
    align-items: 'center';
    border-radius: 24;
    z-index: 2;
    padding-vertical: 10;
    padding-left: 10;
    padding-right: 18;
  `
}
