import { useFonts } from 'expo-font';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { colors } from './src/Global/colors';

import Navigator from './src/navigation/Navigator';



const App = () => {

  const [fontLoaded] = useFonts({
    JosefinSBI: require('./assets/fonts/Josefin_Sans/static/JosefinSans-SemiBoldItalic.ttf'),
    JosefinSB: require('./assets/fonts/Josefin_Sans/static/JosefinSans-SemiBold.ttf'),
    JosefinM: require('./assets/fonts/Josefin_Sans/static/JosefinSans-Medium.ttf'),
    Josefin: require('./assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf'),
    Lobster: require('./assets/fonts/Lobster/Lobster-Regular.ttf')
  })

  if (!fontLoaded) return null

  return (
    <>
        <StatusBar
          backgroundColor={colors.color5}
          barStyle='default'
        />
        <SafeAreaView/>
        <Navigator/>
    </>
  );
}
export default App

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  text: {
    fontSize: 20,
  },
  input: {
    backgroundColor: colors.color3,
    width: "80%",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
