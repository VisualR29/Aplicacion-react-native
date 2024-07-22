import { useCallback } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { initSQLiteDB } from './src/persistence/index';
import store from './src/store/index'
import { colors } from './src/global/colors';
import Navigator from './src/navigation/Navigator';

// (async () => {
//   try {
//     const response = await initSQLiteDB()
//     console.log({ responseCreatingDB: response })
//     console.log("DB Inicilized")
//   } catch (error) {
//     console.log({ errorCreatingDB: error })
//   }
// })()

export default function App() {

  // Configuración de fuente
  const [fontsLoaded, fontError] = useFonts({
    'MyFont': require('./assets/PlayfairDisplay-VariableFont_wght.ttf'),
    'MyFontItalic': require('./assets/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.white,
  },
});