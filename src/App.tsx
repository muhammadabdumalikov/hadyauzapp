/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';
// import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
console.log(444444, AntDesign);

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={backgroundStyle}>
          {/* <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
          <Navigation />
          {/* </ThemeProvider> */}
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
