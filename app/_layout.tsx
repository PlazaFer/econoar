import 'expo-dev-client'
import { ThemeProvider as NavProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider, type DefaultTheme } from 'styled-components/native'
import { appTheme, navTheme } from 'src/config/theme'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function AppLayout() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme as DefaultTheme}>
        <StatusBar style="light" />
        <S.AppWrapper>
          <NavProvider value={navTheme}>
            <Slot screenOptions={{ headerShown: false }} />
          </NavProvider>
        </S.AppWrapper>
      </ThemeProvider>
      </QueryClientProvider>
  )
}

const S = {
  AppWrapper: styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color: ${appTheme.background};
  `
}
