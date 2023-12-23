import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { colors } from './src/Global/colors';
import TabNavigator from './src/navigation/TabNavigator';
import { fonts } from './src/Global/fonts';



const App = () => {
  
  const [fontLoaded] = useFonts(fonts)
  if (!fontLoaded) return null

  return (
    <>
        <StatusBar
          backgroundColor={colors.color5}
          barStyle='default'
        />
        <SafeAreaView/>
        <TabNavigator/>
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
