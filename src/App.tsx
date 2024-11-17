// import 'react-native-gesture-handler';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './navigation';
import YaMap from 'react-native-yamap';
import SplashScreen from 'react-native-splash-screen';
import CustomSplashScreen from './components/app-components/splash-screen';
import * as Font from 'expo-font'; // For loading fonts (if using)
import queryClient from './service/api/react-query';
import {QueryClientProvider} from '@tanstack/react-query';

YaMap.init('8e3ed980-d7b6-4dcc-ad54-7d06df299397');

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        // Load custom fonts
        // await Font.loadAsync({
        //   'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
        //   'Urbanist-Medium': require('./assets/fonts/Urbanist-Medium.ttf'),
        // });

        // Simulate loading additional resources (e.g., API calls)
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
        SplashScreen?.hide();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  // Show your custom splash screen until loading finishes
  if (isLoading) {
    return <CustomSplashScreen />;
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* <SafeAreaView style={backgroundStyle}> */}
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Navigation />
          </ThemeProvider>
        </QueryClientProvider>
        {/* </SafeAreaView> */}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
