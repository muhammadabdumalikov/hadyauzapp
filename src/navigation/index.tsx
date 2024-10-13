import React from 'react';

import {NavigationContainer, Theme, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './bottom-tabs';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tab-navigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const theme = useTheme();

  return (
    <NavigationContainer theme={theme as unknown as Theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}>
        <Stack.Screen name="main" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
