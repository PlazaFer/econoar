import { useFonts } from 'expo-font'

/**
 * Use Cache Assets Before Render
 * -
 */
export default function useCacheAssets() {
  const [fontsLoaded] = useFonts({ 
    extraLight: require('src/assets/fonts/Poppins-ExtraLight.ttf'),
    light: require('src/assets/fonts/Poppins-Light.ttf'),
    regular: require('src/assets/fonts/Poppins-Regular.ttf'),
    medium: require('src/assets/fonts/Poppins-Medium.ttf'),
    semiBold: require('src/assets/fonts/Poppins-SemiBold.ttf'),
    bold: require('src/assets/fonts/Poppins-Bold.ttf'),
    extraBold: require('src/assets/fonts/Poppins-ExtraBold.ttf'),
  })
  return fontsLoaded
}
