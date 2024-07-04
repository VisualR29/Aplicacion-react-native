import * as React from 'react';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  //Configuración de fuente

  const [fontsLoaded, fontError] = useFonts({
    'Opensans': require('./assets/OpenSans-VariableFont_wdth,wght.ttf')
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