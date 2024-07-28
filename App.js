import { useEffect } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { colors } from './src/global/colors';
import { useDB } from './src/Hooks/useDB';
import Navigator from './src/navigation/Navigator';
import store from './src/store/index';

export default function App() {

  const { initDB } = useDB()

  useEffect(() => {
    initDB();
  }, [])

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