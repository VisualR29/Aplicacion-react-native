import * as React from 'react';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {

  //Configuración de fuente
  const [fontsLoaded, fontError] = useFonts({
    'MyFont' : require('./assets/PlayfairDisplay-VariableFont_wght.ttf'), 
    'MyFontItalic': require('./assets/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <>
      <AppNavigator />
    </>
  );
}