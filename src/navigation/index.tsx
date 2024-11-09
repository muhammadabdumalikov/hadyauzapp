import React from 'react';

import {NavigationContainer, Theme, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './bottom-tabs';
import WishlistScreen from '@/screens/wishlist-screen';
import NotificationScreen from '@/screens/notification-screen';
import ProductDetailScreen from '@/screens/product-detail';
import {SearchScreen} from '@/screens/search-screen';
import OrderConfirmationScreen from '@/screens/order-confirmation-screen';
import {ONBOARDING_KEY, OnboardingCarousel} from '@/screens/onboarding-screens';
// import { SplashScreen } from 'expo-router';
import {getData} from '@/storage/store';
import {WelcomeScreen} from '@/screens/welcome-screen';

// SplashScreen.preventAutoHideAsync();

const isOnboardingCompleted =
  getData(ONBOARDING_KEY).then(data => data) || false;

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="tab-navigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="tab-navigator" component={TabNavigator} />
      <Stack.Screen name="welcome-screen" component={WelcomeScreen} />
      <Stack.Screen name="onboarding-screen" component={OnboardingCarousel} />
      <Stack.Screen name="wishlist-screen" component={WishlistScreen} />
      <Stack.Screen name="notification-screen" component={NotificationScreen} />
      <Stack.Screen
        name="product-detail-screen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="search-screen" component={SearchScreen} />
      <Stack.Screen
        name="order-confirmation-screen"
        component={OrderConfirmationScreen}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const theme = useTheme();

  return (
    <NavigationContainer theme={theme as unknown as Theme}>
      <Stack.Navigator
        initialRouteName="main"
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

export default function RootLayout() {
  if (!isOnboardingCompleted) {
    return <OnboardingCarousel />;
  }

  return <Navigation />;
}
