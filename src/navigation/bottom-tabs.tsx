import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {colors as Colors, textColors} from '../constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BoxSvg from '../assets/icons/box';
import {HomeMenuIcon, HomeMenuIconInactive} from '../assets/icons/home_menu';
import {IdeasIconActive, IdeasIconInactive} from '../assets/icons/ideas';
import {BlurView} from '@react-native-community/blur';
import {BellIcon} from '../assets/icons/bell';
import {useClientOnlyValue} from '../components/useClientOnlyValue';
import HomeScreen from '../screens/(tabs)/home';
import IdeasScreen from '../screens/(tabs)/ideas';

const Tab = createBottomTabNavigator();

const TabbarBackground = () => (
  <BlurView blurAmount={20} style={styles.blurView} />
);

const TabbarIcon = ({focused}: {focused: boolean}) =>
  focused ? (
    <HomeMenuIcon width={24} height={24} />
  ) : (
    <HomeMenuIconInactive width={24} height={24} />
  );

const HomeHeaderRight = () => (
  <View style={styles.headerTwoBtns}>
    <Pressable style={{height: 24, width: 24}}>
      <BellIcon color={textColors.navyBlack} />
    </Pressable>

    <Pressable style={{height: 24, width: 24}}>
      <BoxSvg color={textColors.navyBlack} />
    </Pressable>
  </View>
);

const IdesTabbarIcon = ({focused}: {focused: boolean}) =>
  focused ? (
    <IdeasIconActive width={28} height={28} />
  ) : (
    <IdeasIconInactive width={28} height={28} />
  );

export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarHideOnKeyboard: true,
        headerShown: useClientOnlyValue(true, false),
        tabBarBackground: TabbarBackground,
        tabBarStyle: {
          position: 'absolute',
          height: Platform.OS === 'ios' ? 90 : 75,
          backgroundColor: textColors.bottomBarBlur,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          overflow: 'hidden',
        },
        tabBarItemStyle: {
          paddingBottom: Platform.OS === 'ios' ? 5 : 15,
        },
        tabBarLabelStyle: {
          fontFamily: 'UrbanistBold',
          fontSize: 10,
          // marginBottom: 5
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Mega Mall',
          tabBarIcon: TabbarIcon,
          headerRight: HomeHeaderRight,
          headerStyle: {height: 100},
          headerTitleStyle: {
            color: textColors.blueOcean,
          },
        }}
      />
      <Tab.Screen
        name="ideas"
        component={IdeasScreen}
        options={{
          title: 'Ideas',
          tabBarIcon: IdesTabbarIcon,
        }}
      />
      {/* <Tab.Screen
        name="catalog"
        options={{
          title: 'Catalog',
          tabBarIcon: ({color, focused}) => (
            <CatalogSvg
              stroke={
                focused
                  ? textColors.purple
                  : textColors.bottomBarInactiveIconColor
              }
              fill={focused ? textColors.purple : 'none'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cart-bag"
        options={{
          title: 'Cart',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <OrderMenuIcon width={24} height={24} />
            ) : (
              <OrderMenuIconInactive width={28} height={28} />
            ),
        }}
      />
      <Tab.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <ProfileMenuIcon width={24} height={24} />
            ) : (
              <ProfileMenuIconInactive width={28} height={28} />
            ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
  },
  headerTwoBtns: {
    flex: 1,
    marginRight: 15,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
