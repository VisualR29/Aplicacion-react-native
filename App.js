import * as React from 'react';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import { initSQLiteDB } from './src/persistence/index';

(async () => {
  try {
    const response = await initSQLiteDB()
    console.log({ responseCreatingDB: response })
    console.log("DB Inicilized")
  } catch (error) {
    console.log({ errorCreatingDB: error })
  }
})()

export default function App() {

  //Configuración de fuente
  const [fontsLoaded, fontError] = useFonts({
    'MyFont': require('./assets/PlayfairDisplay-VariableFont_wght.ttf'),
    'MyFontItalic': require('./assets/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <AppNavigator />
  );
}